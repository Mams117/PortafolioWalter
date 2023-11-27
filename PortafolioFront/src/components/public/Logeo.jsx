import React from "react";
import { NavLink } from "react-router-dom";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import UseAuth from "../../helpers/UseAuth";

const Logeo = () => {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>;
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>;
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  const { setAutenticado } = UseAuth();
  const loginUsuario = async (e) => {
    e.preventDefault();
    let usuarioLogin = form;
    //guardar en la api
    const request = await fetch(Global.url + "perfil/login", {
      method: "POST",
      body: JSON.stringify(usuarioLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();

    if (data.status == "ok") {
      // console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setGuardado("Guardado");
      setAutenticado(data.user);
      //redireccion
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setGuardado("Error");
    }
  };
    return (
    <>
    <div className="login-page bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                
                    <div className="bg-white shadow rounded">
                        <div className="row">
                            <div className="col-md-7 pe-0">
                                <div className="form-left h-100 py-5 px-5">
                                    <form action="" className="row g-4">
                                            <div className="col-12">
                                                <label>Username<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter Username"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>Password<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter Password"/>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <NavLink to="/Registro" classNameName="btn btn-primary">
                                                    <a className="float-end text-primary">Registrarse?</a>
                                                </NavLink>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary px-4 float-end mt-4">Entrar</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 ps-0 d-none d-md-block">
                                <div className="form-right h-100 bg-primary text-white text-center pt-5">
                                    <i className="bi bi-bootstrap"></i>
                                    <h2 className="fs-1">Bienvenido</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-end text-secondary mt-3">Bootstrap 5 Login Page Design</p>
                </div>
            </div>
        </div>
    </div>
    </> 
     );
};
 
export default Logeo;
<></>;