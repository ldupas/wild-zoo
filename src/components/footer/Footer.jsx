import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-columns-container">
                <div className="footer-column footer-column-address">
                    <h4>Adresse</h4>
                    <span>2920 Zoo Dr</span>
                    <span>San Diego, CA 92101</span>
                    <span>États-Unis</span>
                </div>
                <div className="footer-column footer-column-contact">
                    <h4>Contact</h4>
                    <span>contact@sandiegozoo.com</span>
                    <span>+1 619-231-1515</span>
                </div>
                <div className="footer-column footer-column-social">
                    <h4>Réseaux Sociaux</h4>
                    <div className="social-links">
                        <a><FaFacebook /></a>
                        <a><FaInstagramSquare /></a>
                        <a><FaTwitterSquare /></a>
                    </div>
                </div>
            </div>
            <p className="greetings">Made with ❤️ par l'ami des bêtes !</p>
        </div>
    )
}

export default Footer;
