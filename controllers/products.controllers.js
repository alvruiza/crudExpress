const { v4: uuidv4 } = require('uuid');

let productos =[]

const agregarProducto = (request, response) => {
    const{nombre, precio, marca, descripcion} = request.body

    const nuevoProducto = {
        id: uuidv4(),
        nombre: nombre,
        precio: precio,
        marca: marca,
        descripcion: descripcion
    }

    productos.push(nuevoProducto)
    response.json({
        success: true,
        response:"Producto agregado correctamente"
    })
}

const leerProductos = (request, response) => {
    try{
        const clave = request.headers.clave
        if(clave === process.env.CLAVESECRETA) {
            response.json({
                success:true,
                response: productos
            })
            }else{
                throw new Error('no tienes acceso al contenido')
            }
    }catch{
        response.json({success:false, error: error.message})
    }
}

const eliminarProducto = (request, response) => {
    const id = request.params.id
    productos =  productos.filter((producto) => producto.id !== id)
    response.json({success:true, response: productos})
}

const editarProducto = (request, response) => {
    const id = request.params.id

    const{nombre, precio, marca, descripcion} = request.body
    
    const productoEnEdicion =  {
        id: id,
        nombre: nombre,
        precio: precio,
        marca: marca,
        descripcion: descripcion
    }
    
    console.log(productoEnEdicion)

    productos = productos.map(producto => {
        if(producto.id === id) {

            return productoEnEdicion
        }
        return producto
    })

    response.json({success:true, response: productos})

}

module.exports = {agregarProducto, leerProductos, eliminarProducto, editarProducto}