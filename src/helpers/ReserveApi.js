
const url = "http://localhost:8080/api/cursos";
const token = JSON.parse(localStorage.getItem("token"));

//Traer reservas
export const getCursos = async (limite = 0, pagina = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la info");
  }
};

//Traer reservas por el id
export const getCursoById = async (id) => {
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

//crear una reserva
export const crearReserva = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

//Actualizar una reserva
export const actualizarReserva = async (id, datos) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

//Borrar una reserva
export const borrarReserva = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};