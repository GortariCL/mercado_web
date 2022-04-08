const express = require('express');
const router = express.Router();
const { getProductos } = require('../db/queries');

//Ruta raíz (Requerimiento 1)
router.get('/', async (req, res) => {
    const productos = await getProductos();
    
    res.render('main', {
        layout: 'main',
        productos: productos.rows,
    });
});

//Ruta productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await getProductos();
        res.statusCode = 201;
        res.end(JSON.stringify(productos.rows));        
    } catch (err) {
        res.statusCode = 500;
        res.end('Problema en el servidor => ', err);
    }
});

module.exports = router;