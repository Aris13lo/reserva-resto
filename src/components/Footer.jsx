import React from 'react';
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.css";

    const Footer = () => {
    return (
        <div>
            <div className="redes">
                <Link to="https://www.twitch.com/" className="fa fa-twitter"></Link>
                <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
                <Link to="https://www.instagram.com/" className="fa fa-instagram"></Link>
            </div>
        </div>
    );
};

export default Footer;