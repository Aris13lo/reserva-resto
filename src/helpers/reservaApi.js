const url = "https://backend-vesubio.onrender.com/api/auth/login";
const token = JSON.parse(localStorage.getItem("token"));

//Traer Reservas
export const getReservas = async (limite = 0, pagina = 0) => {};

//Traer Reservas por el id
export const getReservaById = async (id) => {};

//crear un Reserva
export const crearReserva = async (datos) => {};

//Actualizar un Reserva
export const actualizarReserva = async (id, datos) => {};

//Borrar un Reserva
export const borrarReserva = async (id) => {};
