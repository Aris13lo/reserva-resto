import React, { useEffect } from 'react';
import anime from 'animejs';
import { gsap } from "gsap";
import '../css/HomeScreen.css';
import header from '../assets/header.jpg';
import hero from '../assets/hero.jpg';

function HomeScreen() {
  useEffect(() => {
    var textWrapper = document.querySelector(".loader-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".loader-text .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 2400 + 30 * i,
    });

    gsap.from(".loader-wrapper", 2, {
      scale: 0.8,
      ease: "power1.inOut",
    });

    gsap.from(".loader", 2, {
      top: "100%",
      ease: "power3.inOut",
    });

    gsap.to(
      ".loader-wrapper, .pre-loader",
      1,
      {
        scale: 1.5,
        opacity: 0,
        display: "none",
        ease: "power3.inOut",
        delay: 2,
      },
      "-=1"
    );

    gsap.from(".revealer", 1, {
      width: "0%",
      ease: "power3.inOut",
      delay: 3,
    });

    gsap.to(".revealer", 0.8, {
      left: "100%",
      ease: "power3.inOut",
      delay: 4,
    });

    gsap.to(".loader-text-wrapper", 0.2, {
      opacity: 0,
      display: "none",
      ease: "power3.inOut",
      delay: 4,
    });

    gsap.from(".col-left", 1, {
      left: "-100%",
      ease: "power3.inOut",
      delay: 4.5,
    });

    gsap.from(".col-left .copy > div", 1.5, {
      x: "-40",
      opacity: 0,
      ease: "power3.inOut",
      delay: 5,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.from(".col-right .header", 1, {
      x: "-20",
      opacity: 0,
      ease: "power3.inOut",
      delay: 5.5,
    });
  }, []);

  return (
    <div>
      <div className="hero-img">
      <img src={hero} alt="" />
      </div>
      <div className="container">
        <div className="cols">
          <div className="col col-left">
            <div className="copy">
              <div className="header">Temporada - 2023</div>
              <div className="sub-header">
                Solicitar una reservación para una mesa
              </div>
              <div className="img-wrapper">
              <img src={header} alt="" />
              </div>
              <div className="info">
                Bienvenidos a El Vesubio: Donde la Pasión por la Gastronomía Alcanza las Estrellas. Le invitamos a unirse a nosotros en El Vesubio para experimentar un festín culinario sin igual. Para solicitar una reservación o reservar una mesa.
              </div>
              <div className="footer">
                <div className="footer-item">Solicitar mesa</div>
                <div className="footer-item">
                  <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/BXaxK3jMq7/s-61x9_2c6bd15e-43e5-4ebf-bf39-a6ff23fb93dd.svg"
                    alt=""
                  />
                </div>
                <div className="footer-item"><a href="#">Reservar</a></div>
              </div>
            </div>
          </div>
          <div className="col col-right">
            <div className="header">
              Eventos, Festines <br />
              y Celebraciones Especiales <br />
            </div>
          </div>
        </div>
        <nav>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">acerca de nosotros</a>
            </div>
            <div className="nav-item">
              <a href="#">nuestro hotel</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#" id="logo">Vesubio &copy;</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a className="nav-link-right" href="#">iniciar sesion</a>
            </div>
            <div className="nav-item">
              <a className="nav-link-right" href="#">reserva</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="loader-text-wrapper block">
        <h1 className="loader-text">Vesubio</h1>
      </div>
      <div className="revealer"></div>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
