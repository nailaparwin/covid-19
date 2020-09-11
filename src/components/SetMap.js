import React, { useState, useEffect } from 'react';
import Map from './Map';

function SetMap() {  
  const [mapCountries, setMapCountries] = useState([]);  
  
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          /* const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));  */         
          setMapCountries(data);         
        });
    };
    getCountriesData();
  }, []);

   
  return (
    <div style={{ background: 'rgb(214, 224, 234,.6)', paddingBottom: 10 }}>             
       <Map countries={mapCountries} />
    </div>
  );
}

export default SetMap;
