import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import AdminScreen from "../pages/AdminScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
=======
//import FooterApp from "../components/FooterApp";
//import NavbarApp from "../components/NavbarApp";
//import AboutScreen from "../pages/AboutScreen";
//import AdminScreen from "../pages/AdminScreen";
//import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
//import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
>>>>>>> 601a7992c26c2fc2728bd9c919a3ed712c73a213

const RoutesApp = () => {
  return (
    <>
      <NavbarApp cerrarSesion={cerrarSesion} user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
<<<<<<< HEAD
        <Route path="/about" element={<AboutScreen />} />
        <Route
=======
        {/* <Route path="/about" element={<AboutScreen />} /> */}
        {/* <Route
>>>>>>> 601a7992c26c2fc2728bd9c919a3ed712c73a213
          path="/admin"
          element={
=======
import Reservas from "../pages/Reservas";
import Admin from "../pages/Admin";
// import FooterApp from "../components/FooterApp";
// import NavbarApp from "../components/NavbarApp";
// import AboutScreen from "../pages/AboutScreen";
// import AdminScreen from "../pages/AdminScreen";
// import ErrorScreen from "../pages/ErrorScreen";
// import HomeScreen from "../pages/HomeScreen";
// import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";

 const RoutesDos = ({ cerrarSesion, user }) => {
   return (
     <>
      {/* <NavbarApp cerrarSesion={cerrarSesion} user={user} /> */}
      <Routes>
         <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/about" element={<AboutScreen />} /> */}
        <Route path="/admin" element={<Admin />} />
        {/* <Route
           path="/admin"
           element={
>>>>>>> 09af803ad2b55ccf402c2c662e8e020940a98293
            <ProtectedRoutesAdmin user={user}>
               <AdminScreen />
             </ProtectedRoutesAdmin>
          }
         /> */}
        {/* <Route path="*" element={<ErrorScreen />} /> */}
       </Routes>
       {/* <FooterApp /> */}
     </>
   );
 };

<<<<<<< HEAD
export default RoutesApp;
=======
 export default RoutesDos;
>>>>>>> 09af803ad2b55ccf402c2c662e8e020940a98293
