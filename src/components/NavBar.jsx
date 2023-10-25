import React from 'react'
import '../css/NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h1 className="icono">Vesubio Resto</h1>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;