import React, { Component } from "react";
import axios from "axios";
import {Link, navegate} from "react-router-dom";
import swal from "sweetalert";

// Import component reactstrap
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from "reactstrap";

// Import Boostrap
import 'bootstrap/dist/css/bootstrap.css';

class Ventas extends Component{

    render(){
        return(
            <div>
                {/* Sales Section Heading */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mt-2">Ventas</h2>
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                
                <form onSubmit ={this.recibirFormulario} >
                    <div>
                        <label>Cédula&nbsp;</label>
                        <input type = "text" name = "cedula" />
                        <input type = "button" value="Buscar"  ref = {this.cedula}/>

                        <label>&nbsp;Cliente&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />    
                        <label>&nbsp;Consecutivo&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                    </div>
                    <div>
                        <label>Cod. Producto</label><br/>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <input type = "button" value="Buscar"  ref = {this.cedula}/>  
                        <label>&nbsp;Nombre Producto&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Cant.&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Vlr. Total&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                    </div>
                    <div>
                        <label>Cod. Producto</label><br/>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <input type = "button" value="Buscar"  ref = {this.cedula}/>  
                        <label>&nbsp;Nombre Producto&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Cant.&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Vlr. Total&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                    </div>
                    <div>
                        <label>Cod. Producto</label><br/>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <input type = "button" value="Buscar"  ref = {this.cedula}/>  
                        <label>&nbsp;Nombre Producto&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Cant.&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                        <label>&nbsp;Vlr. Total&nbsp;</label>
                        <input type = "text" name = "nombre" ref = {this.nombre} />  
                    </div>
                    <div>
                        <label className="mt-4">Total Venta&nbsp;</label>
                        <input type = "text" name = "direccion" ref = {this.direccion} />    
                    </div>
                    <div>
                        <label className="mt-2">Total IVA&nbsp;</label>
                        <input type = "text" name = "telefono" ref = {this.telefono} />  
                        </div>
                    <div>
                        <label className="mt-2">Total con IVA&nbsp;</label>
                        <input type = "text" name = "correo" ref = {this.correo}/>    
                    </div>

                    {/* Button Agregar */}
                    <Button type="submit" className="mt-3" color="success" >Agregar Venta</Button>
                 
                </form>



                
            </div>
        );
    }
}
export default Ventas;