// ReservationForm.js
import React, { useState, useEffect } from "react";
import "../css/reserva.css";
import { crearReserva } from "../helpers/reservaApi";
import { getCategorias } from "../helpers/categoriaApi";

const ReservaForm = ({ onReserve, selectedReservation }) => {
  const [categorias, setCategorias] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "",
    fecha: "",
    hora: "",
    precio: 0,
    personas: 1,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtén el token desde el localStorage
    const token = JSON.parse(localStorage.getItem("token"));

    // Decodifica el token para obtener la información del usuario
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodificación base64 manual
      setUser(decodedToken.usuario); // Ajusta la propiedad 'usuario' según la estructura de tu token
    }

    traerCategorias();
  }, []);

  useEffect(() => {
    if (selectedReservation) {
      setFormData({
        nombre: selectedReservation.nombre,
        usuario: selectedReservation.usuario,
        categoria: selectedReservation.categoria,
        fecha: selectedReservation.fecha,
        hora: selectedReservation.hora,
        precio: selectedReservation.precio,
        personas: selectedReservation.personas,
      });
    }
  }, [selectedReservation]);

  const traerCategorias = async () => {
    const { categorias } = await getCategorias();
    setCategorias(categorias);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id } = JSON.parse(localStorage.getItem("usuario"));
    const idUsuario = _id;
    console.log(_id);

    try {
      const { nombre, categoria, fecha, hora, precio, personas } = formData;

      const datosReserva = {
        nombre,
        categoria,
        fecha,
        hora,
        precio,
        personas,
        usuario: idUsuario,
      };

       
      const resp = await crearReserva(datosReserva);
      console.log(resp);

       setFormData({
        nombre: "",
        categoria: "",
        fecha: "",
        hora: "",
        precio: 0,
        personas: 1,
      });
    } catch (error) {
      console.error("Error al guardar la reserva:", error);
    }
  };

  const calcularPrecio = () => {
    // Lógica para calcular el precio total según tus necesidades
    return formData.personas * 100;
  };

  return (
    <section className="banner">
      <h2>{selectedReservation ? "EDITAR RESERVA" : "RESERVA TU MESA"}</h2>
      <div className="card-contenedor">
        <div className="card-img"></div>
        <div className="card-contenido">
          <h3>Reserva</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Nombre completo"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona una categoría</option>
                {categorias &&
                  categorias.map((categoria) => (
                    <option key={categoria._id} value={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
              </select>
              <input
                type="date"
                name="fecha"
                min={new Date().toISOString().split("T")[0]}
                value={formData.fecha}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="hora"
                min="20:00"
                max="24:00"
                value={formData.hora}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                placeholder="Personas por mesa"
                name="personas"
                min="1"
                max="10"
                value={formData.personas}
                onChange={handleInputChange}
                required
              />
              <div className="calcularPrecio">
                <p>Precio por persona: $100</p>
                <p className="total">Total: ${calcularPrecio()}</p>
              </div>
              <input
                type="submit"
                value={
                  selectedReservation ? "GUARDAR CAMBIOS" : "RESERVAR MESA"
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservaForm;