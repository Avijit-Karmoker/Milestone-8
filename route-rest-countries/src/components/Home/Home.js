import React from "react";
import { useEffect, useState } from 'react';
import Country from "../Country/Country";


const Home = () => {
  const url = "https://restcountries.eu/rest/v2/all";

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
        <h1>Countries: {countries.length}</h1>
        {
        countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
      }
    </div>
  );
};

export default Home;
