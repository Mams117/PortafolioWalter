import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import DatosPersona from "./DatosPersona";
import AgregarEstudios from "./AgregarEstudios";
const LayoutPrivado = () => {
    return ( <>
     <div className="container-fluid">
        <Header />
        <AgregarEstudios/>
      
        <div className="row">
          <Outlet />
        </div>
      </div>
    
    </> );
}
 
export default LayoutPrivado;