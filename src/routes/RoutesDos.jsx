import React from "react";
import { Routes, Route } from "react-router-dom";
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
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </>
  );
};

export default RoutesApp;
