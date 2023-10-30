const db = require('../database/connection');
const Schema = db.Schema;

const Entregador = new Schema({
    nome: {
        type: String, required: true
    },
    cpf: {
        type: String, required: true
    },
    telefone: {
        type: String, required: true
    },
    cep: {
        type: String, required: true
    },
    telefone: {
        type: String, required: true
    },
    status: {
        type: String, required: true
    }
})
db.model('entregadores', Entregador)