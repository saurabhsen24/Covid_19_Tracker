import React from 'react';
import { MapContainer , TileLayer, MapConsumer } from "react-leaflet";
import { showDataOnMap } from '../../util';
import "./Map.css";

function Map({countries, casesType , center, zoom }) {
    
    return (
        <div className="map">
            <MapContainer  center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                      <MapConsumer>
                        {(map) => {
                            map.setView(center)   
                        return null
                        }}
                    </MapConsumer>
                    {
                        showDataOnMap(countries, casesType)
                    }
            </MapContainer>
      </div>
    )
}

export default Map;