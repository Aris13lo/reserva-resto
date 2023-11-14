
<<<<<<< HEAD
// const url = "http://localhost:8080/api/cursos";
// const token = JSON.parse(localStorage.getItem("token"));

// //Traer reservas
// export const getCursos = async (limite = 0, pagina = 0) => {
//   try {
//     const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
//     const data = await resp.json();
=======
const url = "http://localhost:8080/api/reservas";
const token = JSON.parse(localStorage.getItem("token"));

//Traer reservas
export const getReservas = async (limite = 0, pagina = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
    const data = await resp.json();
>>>>>>> 09af803ad2b55ccf402c2c662e8e020940a98293

//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("No se pudo obtener la info");
//   }
// };


<<<<<<< HEAD
// //Traer reservas por el id
// export const getCursoById = async (id) => {
//   try {
//     const resp = await fetch(url + "/" + id, {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": token,
//       },
//     });
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("No se pudo obtener la info");
//   }
// };
=======
//Traer reservas por el id
export const getReservasById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la info");
  }
};
>>>>>>> 09af803ad2b55ccf402c2c662e8e020940a98293


// //crear una reserva
// export const crearReserva = async (datos) => {
//   try {
//     const resp = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(datos),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": token,
//       },
//     });

//     const data = await resp.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//     return { msg: "No se conectó con backend" };
//   }
// };


// //Actualizar una reserva
// export const actualizarReserva = async (id, datos) => {
//   try {
//     const resp = await fetch(url + "/" + id, {
//       method: "PUT",
//       body: JSON.stringify(datos),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": token,
//       },
//     });

//     const data = await resp.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//     return { msg: "No se conectó con backend" };
//   }
// };


// //Borrar una reserva
// export const borrarReserva = async (id) => {
//   try {
//     const resp = await fetch(url + "/" + id, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": token,
//       },
//     });

//     const data = await resp.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//     return { msg: "No se conectó con backend" };
//   }
// };