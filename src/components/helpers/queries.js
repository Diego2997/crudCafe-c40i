//llamar la variable de entorno

const URL_usuario = import.meta.env.VITE_API_USUARIO;
/*
GET devuelven una lista de elementos, puede devolver un elemento
POST permite agregar elementos
PUT / PATCH permiten modificar elementos
DELETE permiten eliminar un elemento
*/
export const login = async(usuario) =>{
    try {
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuario)
        const listaUsuarios = await respuesta.json()
        //buscar si en la lista de usuarios existe el mail
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email)
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log("el password es incorrecto")
                return null
            }
        }else{
            return null
        }
    } catch (error) {
        
    }
}