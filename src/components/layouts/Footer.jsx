import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './footer.scss';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <p>Todos los derechos reservados</p>
                <div className="socialMedia">
                    <a href="/"><FiFacebook /></a>
                    <a href="/"><FiInstagram /></a>
                    <a href="/"><FaWhatsapp /></a>
                </div>            
            </footer>
        </div>
    )
}

export default Footer;
