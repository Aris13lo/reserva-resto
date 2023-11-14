
// import React, { useState } from "react";
// //funcion borrar reservas
// import { borrarReserva } from "../helpers/ReserveApi";

// //Sweet Alert
// import Swal from "sweetalert";
// import withReactContent from "sweetalert2-react-content";

// //importar el modal para editar
// import ModalEdit from "./ModalEdit";

// const TableReservas = ({ reservas, traerReservas }) => {
// const MySwal = withReactContent(Swal);

//   //Manejo del modal-------------------
//   //mostrar el modal
//   const [show, setShow] = useState(false);

//   //por id del reserva
//   const [cid, setCid] = useState(null);

//   //cierre del modal
//   const handleClose = () => {
//     setCid(null);
//     setShow(false);
//     traerReservas();
//   };

//   //abre el modal
//   const handleShow = (id) => {
//     setCid(id);
//     setShow(true);
//   };
//   //--------------------------------------------

//   //borrar reserva--------------------------------
//   const inactivarReserva = async (nombre, id) => {
//     // MySwal.fire({
//     //   title: "Do you want to save the change?",
//     //   showDenyButton: true,
//     //   showCancelButton: true,
//     //   confirmButtonText: "Save",
//     //   denyButtonText: `don't save`,
//     // }).then((result) => {
//     //   /* Read more about isConfirmed, isDenied below */
//     //   if (result.isConfirmed) {
//     //     MySwal.fire("Saved!", "", "success");
//     //   } else if (result.isDenied) {
//     //     MySwal.fire("Changes are not saved", "", "info");
//     //   }
//     // });
//     //-----------------------------------------------------
//     MySwal.fire({
//       title: `Está seguro que quiere inactivar la reserva ${nombre}?`,
//       showDenyButton: true,
//       showCancelButton: false,
//       confirmButtonText: "Si",
//       denyButtonText: `No`,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         borrarReserva(id).then((resultado) => {
//           console.log(resultado);
//           traerReservas();
//           MySwal.fire("", `${resultado.msg}`, "success");
//         });
//       } else if (result.isDenied) {
//         MySwal.fire("La reserva no se inactivó", "", "info");
//       }
//     });
//   };
//   //!configurar el boton eliminar reserva

//   return (
//     <>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Nombre</th>
//             <th scope="col">Categoría</th>
//             <th scope="col">Precio</th>
//             <th scope="col">Destacado</th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody>
//           {reservas.map((reserva) => (
//             <tr key={reserva._id}>
//               <th>{reserva.nombre}</th>
//               <td>{reserva.categoria.nombre}</td>
//               <td>{reserva.precio}</td>
//               <td>
//                 {reserva.destacada ? (
//                   <i className="fa fa-star" aria-hidden="true"></i>
//                 ) : (
//                   <i className="fa fa-star-o" aria-hidden="true"></i>
//                 )}
//               </td>
//               <td>
//                 <div className="d-flex gap-3">
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handleShow(reserva._id)}
//                   >
//                     <i className="fa fa-pencil" aria-hidden="true"></i>
//                   </button>
//                   {/* boton eliminar reserva */}
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => inactivarReserva(reserva.nombre, reserva._id)}
//                   >
//                     <i className="fa fa-trash" aria-hidden="true"></i>
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* modales para editar */}
//       {show && <ModalEdit show={show} handleClose={handleClose} cid={cid} />}
//     </>
//   );
// };

// export default TableReservas;