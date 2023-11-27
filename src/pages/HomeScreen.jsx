import React from 'react';
import '../css/HomeScreen';
import header from '../assets/header.jpg';
import hero from '../assets/hero.jpg';

function HomeScreen() {
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
      </div>
      <div className="loader-text-wrapper block">
        <h1 className="loader-text">Vesubio</h1>
      </div>
    </div>
  );
}

export default HomeScreen;