const mongoose = require('mongoose')
const { db } = require('../config')

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
    .then(() => {
        console.log('Conexion exitosa')
    }).catch((error) => {
        console.log('Error al conectarse', error.message);
    })

module.exports = connection