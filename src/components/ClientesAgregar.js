import React, { Component } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {Button} from 'reactstrap';


class ClientesAgregar extends Component{
    cedula = React.createRef();
    nombre = React.createRef();
    direccion = React.createRef();
    telefono = React.createRef();
    correo = React.createRef();
    

    state = {
        cliente: [],
        status : null
    }

    recibirFormulario = (e) =>{
        e.preventDefault();
        var cliente = {
            cedula:this.cedula.current.value,
            nombre:this.nombre.current.value,
            direccion:this.direccion.current.value,
            telefono:this.telefono.current.value,
            correo:this.correo.current.value,
            
        }
        console.log(this.cedula.current.value);
        console.log(cliente);

        this.setState({
            cliente:cliente
        });
        

        console.log(this.state.cliente.cedula);

        axios.post("http://localhost:8080/api/clientes/clientes",cliente)
            .then(res=>{
                if(res.data){
                    this.setState({
                        cliente:res.data,
                        status: "success"
                        })
                    }     
                
                    
            })
    }
    render(){
        if(this.state.status == "success"){
            return <Navigate to = "/clientes" />        }
        return(
            <div>
                {
                    this.state.cliente.cedula &&
                    <div>
                        <p>Cédula:<strong>{this.state.cliente.cedula}</strong></p>
                        <p>Nombre Completo:<strong>{this.state.cliente.nombre}</strong></p>
                        <p>Dirección:<strong>{this.state.cliente.direccion}</strong></p>
                        <p>Teléfono:<strong>{this.state.cliente.telefono}</strong></p>
                        <p>Correo Electrónico:<strong>{this.state.cliente.correo}</strong></p>
                        
                    </div> 
                }
                <form onSubmit ={this.recibirFormulario} >
                    <div>
                        <label>Cédula</label>
                        <input type = "text" name = "cedula" ref = {this.cedula} />
                    </div>
                    <div>
                        <label>Nombre Completo</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />    
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input type = "text" name = "direccion" ref = {this.direccion} />    
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input type = "text" name = "telefono" ref = {this.telefono} />    
                    </div>
                    <div>
                        <label>Correo Electrónico</label>
                        <input type = "text" name = "correo" ref = {this.correo}/>    
                    </div>
                    
                    <div>
                        <Button color="success">AGREGAR</Button>
                    </div>
                 
                </form>
            </div>        
        );
    }
}

export default ClientesAgregar;     