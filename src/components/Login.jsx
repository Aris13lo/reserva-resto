import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import MessageApp from "../components/MessageApp";
import "../css/login.css";

const Login = ({ iniciarSesion, guardarUsuario }) => {
  const navigate = useNavigate();
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
      navigate("/");
    }
    setResultado(resp);
    setLoading(false);
  };

  return (
    <>
      <div className="container container-login text-center">
        <div className="row px-2">
          <h3 className="titulo">Inicio de sesión</h3>
          <div className="col-12 col-md-4 offset-md-4 card-login text-center">
            <form onSubmit={handleLogin}>
              <div className="mt-3">
                <label className="sr-only">User</label>
                <input
                  type="email"
                  placeholder="juanperez@mail.com"
                  className="form-control"
                  value={inputCorreo}
                  onChange={(e) => setInputCorreo(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  placeholder="contraseña"
                  className="form-control"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              </div>
              <div className="mt-3 d-grid">
                <button disabled={loading && true}>Iniciar Sesion</button>
                <p className="error escondido">Error al iniciar sesión</p>
              </div>
            </form>

            {resultado?.msg && (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
          </div>
        </div>
        <p>
          ¿Todavía no tienes una cuenta?{" "}
          <NavLink to="/register" className="link">
            Regístrate
          </NavLink>{" "}
        </p>
      </div>
    </>
  );
};

export default Login;
