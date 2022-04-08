const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Feer1985',
    database: 'carrito',
    port: 5432
});
//Funcion para obtener productos
const getProductos = async () => {
    try {
        const consulta = {
            text: 'SELECT * FROM productos;',
        }
        const result =  await pool.query(consulta);
        return result;
    } catch (err) {
        console.log(`El error se encuentra en la tabla: ${err.table}.
        El detalle del error es: ${err.detail}.
        El código de error es: ${err.code}.
        Restricción violada: ${err.constraint}`);
    }
}

module.exports = {
    getProductos
}