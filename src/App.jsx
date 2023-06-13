import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
 import Error404 from "./components/views/Error404";
 import Menu from "./components/common/Menu";
 import Footer from "./components/common/Footer";
 import Inicio from "./components/views/Inicio";
 import DetalleProducto from "./components/views/DetalleProducto";
 import CrearProducto from "./components/views/producto/CrearProducto";
 import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Registro from './components/views/Registro'
import Login from './components/views/Login'
import { useState } from "react";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState({})

  return (
    <>
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/login" element={<Login/>} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>
        <Route exact path="/detalle" element={<DetalleProducto/>}/>
        <Route exact path="/administrador" element={<Administrador/>}/>
        <Route exact path="/administrador/crear-producto" element={<CrearProducto/>}/>
        <Route exact path="/administrador/editar-producto" element={<EditarProducto/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      {/* <Menu></Menu> */}
      {/* <Error404></Error404> */}
      {/* <Inicio></Inicio> */}
      {/* <DetalleProducto></DetalleProducto> */}
      {/* <CrearProducto></CrearProducto> */}
      {/* <EditarProducto></EditarProducto> */}
       {/* <Administrador></Administrador> */}
      {/* <Footer></Footer>  */}
    </>
  );
}

export default App;
