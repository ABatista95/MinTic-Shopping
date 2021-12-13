import React, { Component } from "react";
import axios from "axios";
import {Link, Navigate, BrowserRouter, NavLink, Route, Routes, Router} from "react-router-dom"; 
import swal from "sweetalert";

// Import component reactstrap
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from "reactstrap";
import '../assets/css/table.css'
// Import Boostrap
import 'bootstrap/dist/css/bootstrap.css';




class Reportes extends Component{

    render(){

        return(
            <div>
                
                {/* Customers Section Heading */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mt-2">reportes</h2>
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* Button Agregar */}
                <Button className="mb-3" color="primary" onClick={this.abrirModal} >Listado de Clientes</Button>&nbsp;
                <Button className="mb-3" color="primary" onClick={this.abrirModal} >Ventas por Clientes</Button>

                

                {/* Tabla de contenido de la BD */}
                <table >
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Correo Electrónico</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Reportes;