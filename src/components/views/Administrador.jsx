import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useState,useEffect } from "react";
import { obtenerProductos } from "../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos,setProductos] = useState([])

  useEffect(()=>{
    obtenerProductos()
    .then(res=>{
      if(res){
        setProductos(res)
      }else{
        Swal.fire("Ocurrio un error","Intente realizar esta operacion en unos minutos","error")
      }
    })
  },[])
    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crear-producto'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
           {productos.map(producto=><ItemProducto producto={producto} setProductos={setProductos} key={producto.id}></ItemProducto>)}
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;