import { Button } from "react-bootstrap";
import { borrarProducto, obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ItemProducto = ({producto,setProductos}) => {

  const eliminarProducto = () =>{
    //todo agregar la consulta de sweetalert para preguntar si esta seguro
    borrarProducto(producto.id).then(res=>{
      if(res && res.status === 200){
        Swal.fire("Producto eliminado","El producto fue eliminado correctamente","success")
        obtenerProductos().then(res=>{if(res) setProductos(res)})
      }else{
        Swal.fire("Ocurrio un error","El producto no pudo ser eliminado","error")
      }
    })
  }
   return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link to={"/administrador/editar-producto/"+producto.id} className="btn btn-warning">Editar</Link>
        <Button variant="danger" onClick={eliminarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
