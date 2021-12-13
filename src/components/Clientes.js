import React, { Component } from "react";
import axios from "axios";
import {Link, Navigate, BrowserRouter, NavLink, Route, Routes, Router} from "react-router-dom"; 
import swal from "sweetalert";

// Import component reactstrap
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from "reactstrap";
import '../assets/css/table.css'
// Import Boostrap
import 'bootstrap/dist/css/bootstrap.css';

// Import de componentes principales
import ClientesAgregar from "./ClientesAgregar";



class Clientes extends Component{
    state = {
        clientes:[],
        abierto:false,
    }

   
    componentWillMount(){
        this.getClientes();
    }


    getClientes = ()=> {
        axios.get("http://localhost:8080/api/clientes/")
            .then(res =>{
                console.log(res.data);
                this.setState({
                    clientes:res.data
                })
            });

    }

    borrarCliente = (id) =>{
        axios.delete("http://localhost:8080/api/clientes/clientes/"+id)
            .then(res=>{
                this.setState({
                    clientes:res.data,
                    status:"deleted"
                    })
                   

                    swal(
                        "Cliente eliminado",
                        "El cliente ha sido eliminado correctamente",
                        "success"
                    );
                    window.location.reload(true);
                })        
        }


    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }
    


    render(){
        if(this.state.status === "deleted"){
            return <Navigate to = "/clientes" />
        }        
        
        //Constante
        const modalStyle={
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }

        return(
            <div>
                
                {/* Customers Section Heading */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mt-2">Clientes</h2>
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* Button Agregar */}
                <Button className="mb-3" color="success" onClick={this.abrirModal} >Agregar Cliente</Button>

                {/* Modal para agregar clientes */}
                <Modal isOpen={this.state.abierto} style={modalStyle}>
                    <ModalHeader>
                        Agregar Cliente
                    </ModalHeader>
                        <ModalBody>
                            <ClientesAgregar/>
                        </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.abrirModal}>CERRAR</Button>
                    </ModalFooter>
                </Modal>

                {/* Tabla de contenido de la BD */}
                <table >
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre Completo</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clientes.map((cliente) =>{
                                return(
                                    <React.Fragment>
                                        <tr>
                                            <td>{cliente.cedula}</td>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.direccion}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>{cliente.correo}</td>
                                            <td>
                                                <button className="btn btn-primary" value="Editar" title="Editar"
                                                    onClick={this.abrirModal
                                                }>
                                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                                </button>&nbsp;

                                                <button className="btn btn-danger" value="Eliminar" title="Eliminar" 
                                                    onClick = {
                                                    ()=>{
                                                        this.borrarCliente(cliente._id)
                                                    }
                                                }>
                                                    <i class="fa fa-eraser" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Clientes;