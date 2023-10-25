import React from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import 'phosphor-icons';
import "../css/NavLogin.css";

function NavLogin() {
    return (
        <nav className='NavLogin'>
        <div className="logo">Vesubio Restó</div>
            <ul>
                <li><NavLink to="/login" className="buttonNav">Iniciar Sesion</NavLink></li>
                <li><NavLink to="/reserva" className="buttonNav">Reserva</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavLogin;
