
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Register from "./components/Register";
//import ProtectedRoutes from "./routes/ProtectedRoutes";
//import LoginScreen from "./pages/LoginScreen";
//import RoutesDos from "./routes/RoutesDos";

//import ErrorScreen from "./pages/ErrorScreen";

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        {/* Rutas proteg para login, datos de usuario y func cerrar sesion */}
        {/* <Route
          path="/*"
          element={
            <ProtectedRoutes login={login}>
              <RoutesDos cerrarSesion={cerrarSesion} user={user} />
            </ProtectedRoutes>
          }
        /> */}
        {/* <Route path="*" element={<ErrorScreen />} /> */}

        {/* Ruta login que recibe funcion iniciar sesion y guardar datos */}
        <Route
          path="/login"
          element={
            <LoginRegister
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
            />
          }
        />
        <Route path="/Register" element={
          <Register/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App