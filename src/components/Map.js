import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './Map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import LocationInfoBox from './LocationInfoBox';
import volcanoIcon from '@iconify/icons-fxemoji/volcano';
import floatingIce from '@iconify/icons-openmoji/floating-ice';


const Map = ({ eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const marker1 = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <Marker latitude={ev.geometries[0].coordinates[1]} longitude={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}>
                <div className="location-marker" >
                    <Icon icon={locationIcon} className="location-icon" />
                </div>
            </Marker>
        }
        return null
    })
    const marker2 = eventData.map(ev => {
        if (ev.categories[0].id === 15) {
            return <Marker latitude={ev.geometries[0].coordinates[1]} longitude={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}>
                <div className="location-marker" >
                    <Icon icon={floatingIce}/>
                </div>
            </Marker>
        }
        return null
    })
    const marker3 = eventData.map(ev => {
        if (ev.categories[0].id === 12) {
            return <Marker latitude={ev.geometries[0].coordinates[1]} longitude={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}>
                <div className="location-marker" >
                    <Icon icon={volcanoIcon}/>
                </div>
            </Marker>
        }
        return null
    })

    let [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        width: window.innerWidth,
        height: window.innerHeight
    });
    return (
        <ReactMapGL
            mapStyle={"mapbox://styles/mapbox/streets-v11"}

            mapboxApiAccessToken={"pk.eyJ1Ijoic3V2YXJuZXNoIiwiYSI6ImNrbW00NmtrZDA0MmQydnBldjgwcjA1OHYifQ.uAboQzYKdlVuxw69EkJoTg"}
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
        >
            
            {marker1}
            {marker2}
            {marker3}
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </ReactMapGL>
    )
}


export default Map
