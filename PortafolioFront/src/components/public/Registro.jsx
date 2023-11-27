import React from "react";
import { NavLink } from "react-router-dom";
const Registro = () => {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>;
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>;
  
    return (
    <>
    <div class="login-page bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form action="" class="row g-4">
                                            <div class="col-12">
                                                <label>Username<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Username"/>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Password"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <NavLink to="/Logeo" className="btn btn-primary">
                                                    <a class="float-end text-primary">Tienes cuenta?</a>
                                                </NavLink>
                                            </div>

                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary px-4 float-end mt-4">Entrar</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100 bg-primary text-white text-center pt-5">
                                    <i class="bi bi-bootstrap"></i>
                                    <h2 class="fs-1">Bienvenido</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-end text-secondary mt-3">Bootstrap 5 Login Page Design</p>
                </div>
            </div>
        </div>
    </div>
    </> 
     );
};
 
export default Registro;
<></>;