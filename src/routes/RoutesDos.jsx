
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarApp from "../components/NavbarApp";
import Gallery from "../pages/Gallery";
//import AdminScreen from "../pages/AdminScreen";
import Reservas from "../pages/ReservaForm";
import HomeScreen from "../pages/HomeScreen";
import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      <NavbarApp cerrarSesion={cerrarSesion} user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservas" element={<Reservas />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          }
        />
        {/* <Route path="*" element={<ErrorScreen />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesDos;
