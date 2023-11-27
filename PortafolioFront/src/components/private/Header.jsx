import React from "react";
const Header = () => {
  return (
    <>
      <header
        id="header"
        className="fixed-top"
        style={{ backgroundColor: "blue" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a className="nav-link scrollto" href="#about">
              Estudios
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Proyectos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Estudios
                </a>
              </li>
            </ul>
           
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
<></>;
