//llamar la variable de entorno

const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_usuarioLogin = import.meta.env.VITE_API_USUARIOLOGIN;
const URL_productos = import.meta.env.VITE_API_PRODUCTO;
/*
GET devuelven una lista de elementos, puede devolver un elemento
POST permite agregar elementos
PUT / PATCH permiten modificar elementos
DELETE permiten eliminar un elemento
*/
// export const login = async(usuario) =>{
//     try {
//         //pedir a la api la lista de usuarios
//         const respuesta = await fetch(URL_usuario)
//         const listaUsuarios = await respuesta.json()
//         //buscar si en la lista de usuarios existe el mail
//         const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email)
//         if(usuarioBuscado){
//             if(usuarioBuscado.password === usuario.password){
//                 return usuarioBuscado
//             }else{
//                 console.log("el password es incorrecto")
//                 return null
//             }
//         }else{
//             return null
//         }
//     } catch (error) {
        
//     }
// }

export const login = async(usuarioNuevo) =>{
    try {
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuarioLogin,{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(usuarioNuevo)
        })
        const usuario = await respuesta.json()
        //buscar si en la lista de usuarios existe el mail
        return usuario
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProductos = async() =>{
    try {
        const respuesta = await fetch(URL_productos)
        const listaProductos = await respuesta.json()
        return listaProductos
    } catch (error) {
        console.log(error)
    }
}

export const obtenerUnProducto = async(id) =>{
    try {
        const respuesta = await fetch(URL_productos+"/"+id)
        const producto = await respuesta.json()
        return producto
    } catch (error) {
        console.log(error)
    }
}

export const crearProducto = async(producto) =>{
    try {
        const respuesta = await fetch(URL_productos,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarProducto = async(id) =>{
    try {
        const respuesta = await fetch(URL_productos+"/"+id,{
            method:"DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarProducto = async(producto,id) =>{
    try {
        const respuesta = await fetch(URL_productos+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}