import React, { useState } from 'react';
import '../css/Reserva.css';

function ReservaForm() {
  const [reserva, setReserva] = useState({
    fecha: '',
    hora: '',
    nombre: '',
    telefono: '',
    personas: '',
  });

  const handleInputChange = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reserva)
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      alert('Reserva realizada con éxito!');
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al realizar la reserva');
    }
  }

  return (
    <section className="banner">
      <h2>RESERVA TU MESA</h2>
      <div className="card-contenedor">
        <div className="card-img"></div>
        <div className="card-contenido">
          <h3>Reserva</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="date"
                name="fecha"
                value={reserva.fecha}
                onChange={handleInputChange}
              />
              <input
                type="time"
                name="hora"
                min="10:00"
                max="24:00"
                value={reserva.hora}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Nombre completo"
                name="nombre"
                value={reserva.nombre}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Telefono"
                name="telefono"
                value={reserva.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                placeholder="Personas por mesa"
                name="personas"
                min="1"
                value={reserva.personas}
                onChange={handleInputChange}
              />
              <input
                type="submit"
                value="RESERVAR MESA"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReservaForm;
