
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import MessageApp from "../components/MessageApp";
import "../css/login.css";



const Login = ({ iniciarSesion, guardarUsuario, registro }) => {

  // const navigate = useNavigate();
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const datos = {
      correo: inputCorreo,
      password: inputPassword,
    };

    const resp = await authLogin(datos);
    console.log(resp);

    if (resp?.token) {

      localStorage.setItem("token", JSON.stringify(resp.token));
      iniciarSesion();

      guardarUsuario(resp.usuario);
      // navigate("/");
    }
    setResultado(resp);
    setLoading(false);
  };
  return (
    <>
      <div>
      </div >
    </>
  )
}

export default Login;