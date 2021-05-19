import Head from "next/head"
import matter from 'gray-matter'
import styles from "../../styles/Home.module.css";
import Map from "../components/Map";
import dynamic from "next/dynamic";
import { Button} from "semantic-ui-react";
import {useEffect, useState} from "react";

const MarkerClusterGroup = dynamic(() => import("react-leaflet-markercluster/src/react-leaflet-markercluster"), {
    ssr: false
});

const Test = ({partnerData}) => {
    const [filter, setFilter] = useState(false);
    let filteredData = partnerData;
    if (filter) {
        filteredData = partnerData.filter((el, index) => el.category === filter)
    }

    // extract all unique categories to create buttons dynamically
    const categories = [...new Set(partnerData.map(element => element.category))]

    const filteredGroupedData = filteredData.reduce((filteredGroupedData, item) => {
        const group = (filteredGroupedData[item.country] || []);
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
                <h1>{filteredData.map(el => el.content)}</h1>
                <Button.Group>
                    <Button onClick={() => setFilter(false)} active={!filter}>
                        Alle
                    </Button>
                    {
                        categories.map( cat => (
                            <Button onClick={() => setFilter(cat)} active={filter === cat}>
                                {cat}
                            </Button>
                        ))
                    }
                </Button.Group>

                <Map className={styles.homeMap} center={[8.5466092,47.3755914]} zoom={12}>
                    {({ TileLayer, Marker, Popup }) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                                {
                                    Object.keys(filteredGroupedData).map(country => (
                                        <MarkerClusterGroup>
                                            {
                                                filteredGroupedData[country].map(university => (
                                                    <Marker position={university.location.coordinates}>
                                                        <Popup>
                                                            {university.title}
                                                        </Popup>
                                                    </Marker>
                                                ))
                                            }
                                        </MarkerClusterGroup>

                                ))
                                }
                        </>
                    )}
                </Map>

            </article>
        </>
    )
}

export async function getStaticProps() {
    const fs = require("fs");

    const files = fs.readdirSync(`${process.cwd()}/content/partners`);
    const partners = files.filter((fn) => fn.endsWith(".md"));

    let data = partners.map((partner) => {
        const path = `${process.cwd()}/content/partners/${partner}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        return matter(rawContent);
    });

    data = data.map(element => (
        {
            content: element.content,
            ...element.data,
            location: JSON.parse(element.data.location),
        }
    ))

    return { props: { partnerData: data, } }
}

export default Test;