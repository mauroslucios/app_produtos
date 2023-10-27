const db = require('../database/connection');
const Schema = db.Schema;

const Pedido = new Schema({
    cliente: {
        type: Schema.Types.ObjectId, ref:'clientes', required: true
    },
    status: {
        type: Schema.Types.ObjectId, ref:'oderStatus', required: true
    },
    dataEntrega: {
        type: Date, required: true
    },
    status: {
        type: Boolean, required: true
    }

})
db.model('pedidos', Pedido);