
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import MessageApp from "../components/MessageApp";
import "../css/login.css";



const Login = ({ iniciarSesion, guardarUsuario, registro }) => {

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
      <div>
      <div>
      <div className="container container-login">
        <div className="row px-2">
          <div className="col-12 col-md-4 offset-md-4 card-login">
            <h3 className="text-center mt-2">
              Inicio de sesión
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mt-3">
                <label className='sr-only'>User</label>
                <input
                  type="email"
                  placeholder="juanperez@mail.com"
                  className="form-control"
                  value={inputCorreo}
                  onChange={(e) => setInputCorreo(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className='sr-only' >Password</label>
                <input
                  type="password"
                  placeholder="contraseña"
                  className="form-control"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              </div>
              <div className="mt-3 d-grid">
                <button disabled={loading && true}>
                  Iniciar Sesion
                </button>
                <p className='error escondido' >Error al iniciar sesion</p>
              </div>
            </form>
            <p>¿Todavia no tenes una cuenta? <NavLink to="/register">Registrate</NavLink> </p>
            {resultado?.msg && (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      </div >
    </>
  )
}

export default Login;