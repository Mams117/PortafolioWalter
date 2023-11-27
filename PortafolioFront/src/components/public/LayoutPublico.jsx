import React from "react";
import { Outlet } from "react-router-dom";
import Logeo from "./Logeo";

const LayoutPublico = () => {
  return (
    <>
      <div className="container-fluid">
        <Logeo/>
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutPublico;
