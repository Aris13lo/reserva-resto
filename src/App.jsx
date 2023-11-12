import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesApp from "./routes/RoutesDos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
