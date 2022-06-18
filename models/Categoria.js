const db = require('../database/connection')
const Schema = db.Schema;

const Categoria = new Schema({
    tipo: {
        type: String, required: true
    },
    sku: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now()
    }
})

db.model('categorias', Categoria)