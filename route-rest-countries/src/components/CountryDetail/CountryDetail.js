import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import './CountryDetail.css';

const CountryDetail = () => {
  let { name } = useParams();

  let [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div className = 'detail'>
      {country.map((ct) => {
        return (
          <div>
            <img src = {ct.flag} alt="" />
            <h1>
              <span style = {{color: 'green'}}>Official Name:</span> {ct.altSpellings[1]},<span> {ct.altSpellings[2]}</span>.
            </h1>
            <h2> <span style = {{color: 'green'}}>Name:</span> {ct.name}</h2>
            <h4>Capital: {ct.capital}</h4>
            <p>
              Area: {ct.area} km<sup>2</sup>
            </p>
            <p>Population: {ct.population}</p>
            <p>Mother Tong : {ct.languages[0].nativeName}</p>
            <p>Timezone: {ct.timezones}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetail;
