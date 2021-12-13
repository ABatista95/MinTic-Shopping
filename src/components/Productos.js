import React, { Component } from "react";
import axios from "axios";
import {Link, Navigate} from "react-router-dom"; 
import swal from "sweetalert";

class Productos extends Component{
    state = {
        productos:[]
    }

    componentWillMount(){
        this.getProductos();
    }

    getProductos = ()=> {
        axios.get("http://localhost:8080/api/productos/")
            .then(res =>{
                console.log(res.data);
                this.setState({
                    productos:res.data
                })
            });

    }

    borrarProducto = (id) =>{
        axios.delete("http://localhost:8080/api/productos/producto/"+id)
            .then(res=>{
                this.setState({
                    productos:res.data,
                    status:"deleted"
                    })
                   

                    swal(
                        "Articulo eliminado",
                        "El articulo ha sido eliminado correctamente",
                        "success"
                    );
                    window.location.reload(true);
                })        
        }

    render(){
        if(this.state.status === "deleted"){
            return <Navigate to = "/productos" />
        }
        
        return(
            <div>                
                {/* Products Section Heading */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">productos</h2>
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                <Link to = "/agregarProducto">Agregar Producto </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Código Producto</th>
                            <th>Nombre Producto</th>
                            <th>Nit Proveedor</th>
                            <th>Precio de Compra</th>
                            <th>Iva</th>
                            <th>Precio de Venta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.productos.map((producto) =>{
                                return(
                                    <React.Fragment>
                                            <tr>
                                                <td>{producto.codigo_producto}</td>
                                                <td>{producto.nombre_producto}</td>
                                                <td>{producto.nit_proveedor}</td>
                                                <td>{producto.precio_compra}</td>
                                                <td>{producto.iva_compra}</td>
                                                <td>{producto.precio_venta}</td>
                                                <td>
                                                <Link to = {"/editarProducto/"+producto._id}>Editar </Link>
                                                    <button onClick = {
                                                        ()=>{
                                                            this.borrarProducto(producto._id)
                                                        }
                                                    }>Eliminar</button>
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

export default Productos;