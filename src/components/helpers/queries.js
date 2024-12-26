// POST - crear un producto - 201
// GET - obtener 1 o mas productos - 200
// DELETE - borrar 1 producto
// PUT - Editar 1 producto

export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch('http://localhost:3000/productos',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.error(error)
        return false
    }
}

export const listarProductosAPI = async()=>{
    try {
        const respuesta = await fetch('http://localhost:3000/productos')
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.error(error)
        return false
    }
}

export const borrarProductoAPI = async(id)=>{
    try {
        const respuesta = await fetch('http://localhost:3000/productos/'+id,{
            method:"DELETE"
        })
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.error(error)
        return false
    }
}