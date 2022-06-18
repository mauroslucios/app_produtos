const db = require('../database/connection');
const Schema = db.Schema;

const TipoCliente = db.Schema({
    tipo: {
        type: String, required: true
    }
})
db.model('tipoCliente', TipoCliente);