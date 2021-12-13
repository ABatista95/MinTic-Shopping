import React, { Component } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";


class EditarProducto extends Component{
    productoId = null;
    path = null;
    url = [];
    codigo = React.createRef();
    producto = React.createRef();
    nit = React.createRef();
    precioCompra = React.createRef();
    iva = React.createRef();
    precioVenta = React.createRef();

    state = {
        producto: [],
        status : null
    }

    componentWillMount(){
        //this.productoId = this.props.match.param.id;
        //this.getProductos(this.productoId);
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log (this.url);
        this.productoId = this.url[2];
        this.getProductos(this.productoId);
    }

    getProductos = (id)=> {
        axios.get("http://localhost:8080/api/productos/producto/"+id)
            .then(res =>{
                if(res.data){
                    console.log(res.data);
                    this.setState({
                        producto:res.data
                    })
                }else{
                    console.log("No hay datos")
                }
            }
        );
    }

    recibirFormulario = (e) =>{
        e.preventDefault();
        var producto = {
            _id:this.productoId,
            codigo_producto:this.codigo.current.value,
            nombre_producto:this.producto.current.value,
            nit_proveedor:this.nit.current.value,
            precio_compra:this.precioCompra.current.value,
            iva_compra:this.iva.current.value,
            precio_venta:this.precioVenta.current.value
        }
        console.log(this.codigo.current.value);
        console.log(producto);



        console.log(this.state.producto.codigo);

        axios.put("http://localhost:8080/api/productos/producto"+this.productoId,producto)
            .then(res=>{
                if(res.data){
                    this.setState({
                        status: "success"
                    })
                }     
              
            })
    }
    render(){
        if(this.state.status === "success"){
            return <Navigate to = "/productos" />        }
        return(
            <div>   
                <h1>Editar Producto</h1>
                {
                    this.state.producto.codigo &&
                    <div>
                        <p>Codigo:<strong>{this.state.producto.codigo}</strong></p>
                        <p>Producto:<strong>{this.state.producto.producto}</strong></p>
                        <p>Nit:<strong>{this.state.producto.nit}</strong></p>
                        <p>Precio Compra:<strong>{this.state.producto.precioCompra}</strong></p>
                        <p>Iva:<strong>{this.state.producto.iva}</strong></p>
                        <p>Precio Venta:<strong>{this.state.producto.precioVenta}</strong></p>
                    </div> 
                }
                <form onSubmit ={this.recibirFormulario} >
                    <div>
                        <label>Codigo del Producto</label>
                        <input type = "text" name = "codigo" ref = {this.codigo} defaultValue={this.state.producto.codigo_producto} />
                    </div>
                    <div>
                        <label>Producto</label>
                        <input type = "text" name = "producto" ref = {this.producto} defaultValue={this.state.producto.nombre_producto} />    
                    </div>
                    <div>
                        <label>Nit Proveedor</label>
                        <input type = "text" name = "nit" ref = {this.nit} defaultValue={this.state.producto.nit_proveedor}/>    
                    </div>
                    <div>
                        <label>Precio Compra</label>
                        <input type = "text" name = "precioCompra" ref = {this.precioCompra} defaultValue={this.state.producto.precio_compra}/>    
                    </div>
                    <div>
                        <label>IVA</label>
                        <input type = "text" name = "iva" ref = {this.iva} defaultValue={this.state.producto.iva_compra}/>    
                    </div>
                    <div>
                        <label>Precio Venta</label>
                        <input type = "text" name = "precioVenta" ref = {this.precioVenta} defaultValue={this.state.producto.precio_venta}/>    
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                 
                </form>
            </div>        
        );
    }
}

export default EditarProducto;     