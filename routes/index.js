const express = require("express")
const {agregarProducto, leerProductos, eliminarProducto, editarProducto} = require('../controllers/products.controllers')

const router = express.Router()

router.route('/productos')
    .post(agregarProducto) 
    .get(leerProductos)

router.route('/producto/:id')
    .delete(eliminarProducto)
    .put(editarProducto)


module.exports = router
