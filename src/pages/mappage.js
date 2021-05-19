import Head from 'next/head';

import Map from '../components/Map';
import styles from '../../styles/Home.module.css';
import dynamic from 'next/dynamic';

const MarkerClusterGroup = dynamic(() => import("react-leaflet-markercluster/src/react-leaflet-markercluster"), {
    ssr: false
});

export default function Home() {
    return (
        <div className={styles.container}>

            <Map className={styles.homeMap} center={[38.907132, -77.036546]} zoom={12}>
                {({ TileLayer, Marker, Popup }) => (
                    <>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <MarkerClusterGroup>
                            <Marker position={[38.907132, -77.036546]} />
                            <Marker position={[38.917132, -77.036546]} />
                        </MarkerClusterGroup>
                        <MarkerClusterGroup>
                            <Marker position={[38.927132, -77.036546]} />
                            <Marker position={[38.937132, -77.036546]} />
                        </MarkerClusterGroup>
                    </>
                )}
            </Map>

        </div>
    )
}
