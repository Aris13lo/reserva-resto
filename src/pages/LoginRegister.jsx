
import React from "react";
import Login from "../components/Login"
import "../css/Login.css";




const LoginRegister = ({ iniciarSesion, guardarUsuario }) => {

  return (
    <Login iniciarSesion={iniciarSesion} guardarUsuario={guardarUsuario} />
  );
};

export default LoginRegister;