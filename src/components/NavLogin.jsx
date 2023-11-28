import React from 'react';
import { NavLink } from 'react-router-dom';
import 'phosphor-icons';
import "../css/NavLogin.css";

function NavLogin({ user }) {
    return (
        <nav className='NavLogin'>
            <div className="logo">Vesubio Restó</div>
            <ul>
                <li><NavLink to="/login" className="buttonNav">Iniciar Sesion</NavLink></li>
                <li><NavLink to="/reserva" className="buttonNav">Reserva</NavLink></li>

                {user && user.rol === "ADMIN_ROLE" && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            Admin
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavLogin;
