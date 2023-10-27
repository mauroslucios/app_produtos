const db = require('../database/connection');
const Schema = db.Schema;

const OrderStatus = new Schema({
    status: {
        type: String, required:true
    }
})
db.model('orderStatus', OrderStatus)