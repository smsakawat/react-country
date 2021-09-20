import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <h2>TravelX.</h2>
                <ul>
                    <li><a href="./App.js">Countries</a></li>
                    <li><a href="./Details.js">Details</a></li>
                    <li><a href="./About.js">About Us</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;
