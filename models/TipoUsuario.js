const db = require('../database/connection');
const Schema = db.Schema;

const TipoUsuario = db.Schema({
    tipo: {
        type: String, required: true
    }
})
db.model('tipoUsuario', TipoUsuario);