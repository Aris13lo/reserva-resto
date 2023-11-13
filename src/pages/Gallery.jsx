import React, { useState } from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';
import img17 from '../assets/images/img17.jpg';
import img18 from '../assets/images/img18.jpg';
import img19 from '../assets/images/img19.jpg';
import img20 from '../assets/images/img20.jpg';
import '../css/Galery.css'; 

const Galeria = () => {
  const [indiceHover, setIndiceHover] = useState(0);

  const itemsGaleria = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  const manejarMouseEnter = (indice) => {
    setIndiceHover(indice);
  };

  const manejarMouseMove = (e) => {
    const indicador = document.querySelector('.indicator');
    indicador.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
  };

  return (
    <div>
      <h1>Nuestras Instalaciones</h1>
      <div className="container">
        <div className="indicator"></div>
        <div className="gallery" onMouseMove={manejarMouseMove}>
          {itemsGaleria.map((item, indice) => (
            <div
              key={indice}
              className="gallery-item"
              onMouseEnter={() => manejarMouseEnter(indice)}
              style={{ flex: indice === indiceHover ? '1 1 400px' : '0 1 20px' }}
            >
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
