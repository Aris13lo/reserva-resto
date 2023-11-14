import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import gsap from 'gsap';
//import 'phosphor-icons';
import "../css/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector('.nav');
    const navHome = document.querySelector('.nav-home');
    const navTop = document.querySelector('.nav-top');
    const navItems = document.querySelector('.nav-items');
    const icon = document.querySelector('.hamburger i');

    if (!isOpen) {
      gsap.to(nav, { height: '370px', duration: 0.75, ease: 'power4.inOut' });
      gsap.to(navTop, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        onStart: function () {
          gsap.set(navTop, { display: 'block' });
        },
        delay: 0.5,
        immediateRender: false,
      });
      gsap.to(navItems, {
        opacity: 0,
        duration: 0.1,
        onComplete: function () {
          gsap.set(navItems, { display: 'none' });
        },
        immediateRender: false,
      });
      gsap.to(navHome, {
        flexGrow: 1,
        duration: 0.2,
        ease: 'power4.inOut',
        delay: 0,
        immediateRender: false,
        onComplete: function () {
          icon.className = 'ph-light ph-x';
        },
      });
    } else {
      gsap.to(nav, { height: '60px', duration: 0.75, ease: 'power4.inOut', delay: 0.2 });
      gsap.to(navTop, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        onComplete: function () {
          gsap.set(navTop, { display: 'none' });
        },
        immediateRender: false,
      });
      gsap.to(navHome, {
        flexGrow: 0,
        duration: 0.2,
        ease: 'power4.inOut',
        immediateRender: false,
        onComplete: function () {
          icon.className = 'ph-light ph-list';
        },
      });
      gsap.to(navItems, {
        opacity: 1,
        duration: 0.2,
        onStart: function () {
          gsap.set(navItems, { display: 'flex' });
        },
        delay: 0.5,
        immediateRender: false,
      });
    }
    setIsOpen(!isOpen);
  };

    return (
<div className="nav">
      <div className="nav-top">
        <div className="more-links">
                    <div className="col">
                        <div className="col-title">
                            <p>Reservaciones</p>
                        </div>
                        <div className="NavLink">
                            <NavLink to="#">Reserva</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Cambiar reserva</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Cancelar reserva</NavLink>
                        </div>
                    </div>

                    <div className="col">
                        <div className="col-title">
                            <p>Nuestra historia</p>
                        </div>
                        <div className="NavLink">
                            <NavLink to="#">Restaurante</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Comidas</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Acerca de nosotros</NavLink>
                        </div>
                    </div>

                    <div className="col">
                        <div className="col-title">
                            <p>¿Buscas alojamiento?</p>
                        </div>
                        <div className="NavLink">
                            <NavLink to="#">Nuestro hotel</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Habitaciones</NavLink>
                        </div>
                        
                        <div className="NavLink">
                            <NavLink to="#">Contacto</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bottom">
        <div className="nav-home">
          <div className="nav-item" id="toggle-btn" onClick={toggleNav}>
            <div className="hamburger">
              <i className={`ph-light ${isOpen ? 'ph-x' : 'ph-list'}`}></i>
            </div>
            <p href="#">Mas</p>
          </div>
        </div>
        <div className="nav-items">
                    <div className="nav-item">
                        <NavLink to="#">Página Principal</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="#">Nuestra Historia</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="#">Contacto</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
