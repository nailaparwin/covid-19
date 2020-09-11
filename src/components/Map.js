import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../App.css";

function Map({ countries }) {  
  let center = { lat: 24.8539615, lng: 66.9868871 }
  let zoom = 3
  let casesType = "cases"
  
  const showDataOnMap = (data) =>
    data && data.map((country, ind) => (
      <Circle
        key={ind}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={"purple"}
        fillColor={"purple"}
        fillOpacity={0.4}
        radius={
          Math.sqrt(country[casesType]) * 800
        }
        
      >
        
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases: {country.cases}              
            </div>
            <div className="info-recovered">
              Recovered: {country.recovered}
            </div>
            <div className="info-deaths">
              Deaths: {country.deaths}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
  return (
  
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"          
        />        
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>    
  );
}

export default Map;