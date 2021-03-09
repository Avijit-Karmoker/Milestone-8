import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    let {name, area} = props.country;
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none'
    }
    // console.log(props.country);
    return (
        <div className = 'countries'>
            <h3>{name}</h3>
            <p>Area: {area} km<sup>2</sup></p>
            <Button variant="secondary"><Link style = {linkStyle}to={`/name/${name}`}>See Details</Link>
</Button>
        </div>
    );
};

export default Country;