import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/" ><img className="logo" src={logo} alt="zoo logo" /></a>
            <div className="navigation" >
                <a className="navigation-link" href="https://www.zupimages.net/viewer.php?id=21/26/tg3e.png">NOS ANIMAUX</a>
                <a className="navigation-link" href="/">À PROPOS</a>
                <a className="navigation-link" href="/">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;
