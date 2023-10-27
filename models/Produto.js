const db = require('../database/connection');
const Schema = db.Schema;

const Produto = new Schema({
    nome : {
        type: String, required: true
    },
    preco: {
        type: String, required: true
    },
    descricao: {
        type: String, required: true
    },
    img_produto: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now()
    },
    categoria: {
        type: Schema.Types.ObjectId, ref:'categorias', required: true
    }

})
db.model('produtos', Produto);