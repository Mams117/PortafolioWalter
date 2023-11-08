import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import DatosPersona from "./DatosPersona";
import { Outlet } from "react-router-dom";
import AgregarEstudios from "./AgregarEstudios";

const LayoutPublico = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Hero />
        <DatosPersona />
        <AgregarEstudios />

        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutPublico;
