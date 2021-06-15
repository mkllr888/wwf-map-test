import Head from 'next/head';
import matter from 'gray-matter';
import styles from '../../styles/Home.module.css';
import Map from '../components/Map';
import dynamic from 'next/dynamic';
import {Button, Grid, Header, Search} from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const MarkerClusterGroup = dynamic(
    () => import('react-leaflet-markercluster/src/react-leaflet-markercluster'),
    {
        ssr: false
    }
);

const initialState = {
    loading: false,
    // by default, this is []. But we want to differenciate between no results and no search. Thus,
    // with this we can later check if results === false and then not filter anything. If results is a list, then
    // filter anyways, even if there are no results.
    results: false,
    value: ''
};

function filterReducer(state, action) {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState;
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query };
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results };
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection };

        default:
            throw new Error();
    }
}

const Area = ({ partnerData, area }) => {
    let filteredData = partnerData;

    const [state, dispatch] = React.useReducer(filterReducer, initialState);
    const { loading, results, value } = state;

    filteredData = Array.isArray(results) ? results : partnerData;
    const timeoutRef = React.useRef();
    const handleSearchChange = React.useCallback((e, data) => {
        clearTimeout(timeoutRef.current);
        dispatch({ type: 'START_SEARCH', query: data.value });

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' });
                return;
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i');
            const isMatch = (result) => {
                console.log(result);
                return re.test(`${result.title} ${result.content} ${result.url} ${result.agreement}`);
            };

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(filteredData, isMatch)
            });
        }, 300);
    }, []);
    React.useEffect(
        () => () => {
            clearTimeout(timeoutRef.current);
        },
        []
    );

    // extract all unique categories to create buttons dynamically
    const categories = [...new Set(partnerData.map((element) => element.category))];

    const filteredGroupedData = filteredData.reduce((filteredGroupedData, item) => {
        const group = filteredGroupedData[item.country] || [];
        group.push(item);
        filteredGroupedData[item.country] = group;
        return filteredGroupedData;
    }, {});



    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <Grid columns={2} stackable>
                    <Grid.Row>
                        <Grid.Column
                            width={8}
                            textAlign="left"
                            floated="left"
                            verticalAlign="middle"

                        >
                            <Button.Group>
                                <Button href="/static/test/out/all" active={area === "all"}>
                                    All
                                </Button>
                                <Button href="/static/test/out/bwl" active={area === "bwl"}>
                                    BWL / Economics
                                </Button>
                                <Button href="/static/test/out/info" active={area === "info"}>
                                    Informatics
                                </Button>
                            </Button.Group>
                        </Grid.Column>
                        <Grid.Column
                            width={4}
                            textAlign="right"
                            floated="right"
                            verticalAlign="middle"
                            stretched
                        >
                            <Header as="h4">
                                Search:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign="right" floated="right">
                            <Search
                                loading={loading}
                                onSearchChange={handleSearchChange}
                                open={false}
                                value={value}
                                aligned="right"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Map className={styles.homeMap} center={[47.3755914, 8.5466092]} zoom={2}>
                    {({ TileLayer, Marker, Popup }) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {Object.keys(filteredGroupedData).map((country) => (
                                <MarkerClusterGroup>
                                    {filteredGroupedData[country].map((university) => (
                                        <Marker position={university.location.coordinates.reverse()}>
                                            <Popup>
                                                <h4>{university.title}</h4>
                                                <p>
                                                    Country: {university.country}<br/>
                                                    Agreement: {university.agreement}<br />
                                                    Link: <a href={university.url}>{(university.url && university.url.length > 45) ? `${university.url.substring(0,43)}...`: university.url   }</a>
                                                </p>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MarkerClusterGroup>
                            ))}
                        </>
                    )}
                </Map>
            </article>
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { area: "all" } }, { params: { area: "bwl" } }, { params: { area: "info" } }],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const fs = require('fs');

    const files = fs.readdirSync(`${process.cwd()}/content/partners`);
    const partners = files.filter((fn) => fn.endsWith('.md'));

    let data = partners.map((partner) => {
        const path = `${process.cwd()}/content/partners/${partner}`;
        const rawContent = fs.readFileSync(path, {
            encoding: 'utf-8'
        });

        return matter(rawContent);
    });

    // WATCH OUT COORDINATES ARE SWITCHED (X, Y)
    data = data.map((element) => (
        {
            content: element.content,
            ...element.data,
            location : JSON.parse(element.data.location)
        }
    ));

    let filteredData = data;
    if (params.area !== "all") {
        filteredData = data.filter((el) => el.category.toLowerCase().includes(params.area));
    }

    return { props: { partnerData: filteredData, area: params.area } };
}

export default Area;
