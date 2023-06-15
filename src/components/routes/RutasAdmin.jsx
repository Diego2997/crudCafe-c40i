import { Routes,Route } from "react-router-dom";
import EditarProducto from "../views/producto/EditarProducto";
import CrearProducto from "../views/producto/CrearProducto";
import Administrador from "../views/Administrador";

const RutasAdmin = () => {
    return (
        <>
        <Routes>
            <Route  path="/" element={<Administrador></Administrador>}></Route>  
            <Route  path="/crear-producto/:id" element={<CrearProducto></CrearProducto>}></Route>  
            <Route  path="/editar-producto/:id" element={<EditarProducto></EditarProducto>}></Route>  
        </Routes>
        </>
    );
};

export default RutasAdmin;