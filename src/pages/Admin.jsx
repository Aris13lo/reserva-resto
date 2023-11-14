

import React, { useEffect, useState } from "react";
//Paginacion

//Tabla de reservas
import TableReservas from "../components/TableReserve";

//Funcion traer reservas
import { getReservas } from "../helpers/ReserveApi";

const AdminScreen = () => {
  //reservas
  const [reservas, setReservas] = useState([]);
  //Total de reservas
  const [totalReservas, setTotalReservas] = useState(0);

  //useEffect q renderiza la tabla con los reservas
  useEffect(() => {
    traerReservas();
  }, [reservas]);

  //Funcion asincronica
  const traerReservas = async () => {
    const { reservas, total } = await getReservas();
    setReservas(reservas);
    setTotalReservas(total);
  };

  return (
    <div className="bg-dark">
      <div className="container bg-light vh-100">
        <div className="row  py-5">
          <div className="col text-center ">
            <h1>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador de Reservas
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            {/* Tabla de reservas */}
            {reservas.length > 0 ? (
              <>
                <h4>Total de reservas: {totalReservas}</h4>
                <TableReservas reservas={reservas} traerReservas={traerReservas} />
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
