
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomeScreen";


const RoutesApp = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

export default RoutesApp;
