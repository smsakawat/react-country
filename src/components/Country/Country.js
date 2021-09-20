import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, capital, population, region, flag } = props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h2>Country: {name}</h2>
            <h3>Capital: {capital}</h3>
            <p><b>Population</b>: {population};</p>
            <p><b>Region</b>: {region}</p>
        </div>
    )
}

export default Country;
