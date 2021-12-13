import React, { Component } from "react"; 
import {BrowserRouter , Switch, Routes, Route, NavLink, Link} from "react-router-dom";

// Style CSS - Boostrap
//- import '../assets/css/style.css';
import '../assets/css/default-style.css';

// Import de componentes principales
import Ventas from "./Ventas";
import Clientes from "./Clientes";
import Productos from "./Productos";
import Reportes from "./Reportes";

// Login


class Router extends Component{
    
    render(){
        return(
            <BrowserRouter>
                <div >
                    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                        <div className="container">
                            <p className="navbar-brand fs-5">tienda La generica <br/> <span class="fas fa-star"></span> cali</p>                  
                            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i className="fas fa-bars"></i>
                            </button>
                            <header className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to ="/ventas" activeClassName = "active">ventas</NavLink></li>
                                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to ="/clientes" activeClassName = "active">Clientes</NavLink></li>
                                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to ="/productos" activeClassName = "active">Productos</NavLink></li>
                                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to ="/reportes" activeClassName = "active">Reportes</NavLink></li>
                                    </ul>
                            </header>
                        </div>
                    </nav>
                    

                    {/* Container Section */}
                    <section class="page-section">
                        <div class="container center-main">                        
                            {/* Cargo section */}
                            <Routes>
                                <Route path = "/ventas" element = {<Ventas/>}/>
                                <Route path = "/productos" element = {<Productos/>}/>
                                <Route path = "/clientes" element = {<Clientes/>}/>
                                <Route path = "/reportes" element = {<Reportes/>}/>
                            </Routes>                            
                        </div>
                        
                    </section>
                    
                    {/* Footer */}
                    <footer class="footer text-center">
                        <div class="container">
                            <div class="row">
                                {/* Footer Location */}
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h4 class="text-uppercase mb-4">Proyecto</h4>
                                    <p class="lead mb-0">
                                        Tienda Online
                                        <br />
                                        Proyecto de Grado
                                    </p>
                                </div>
                                {/* Footer Social Icons */}
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h4 class="text-uppercase mb-4">Contactos</h4>
                                    <a target="_blank" class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ahmansavthor-batista/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                </div>
                                {/* Footer About Text */}
                                <div class="col-lg-4">
                                    <h4 class="text-uppercase mb-4">Equipo de desarrollo</h4>
                                    <p class="lead mb-0">
                                        Estudiantes Grupo 2 - de Desarrollo de aplicaciones Web. <a href="https://github.com/ABatista95/TIC-Proyecto.git" target="_blank" >Proyecto GitHub</a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* Copyright Section */}
                    <div class="copyright py-4 text-center text-white">
                        <div class="container"><small>Copyright &copy; Your Website 2021</small></div>
                    </div>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default Router;