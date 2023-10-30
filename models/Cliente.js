const db = require('../database/connection');
const Schema = db.Schema;

const Cliente = new Schema({
    nome: {
        type: String, required: true
    },
    cpf: {
        type: String, required: true
    },
    cep: {
        type: String, required: true
    },
    numero : {
        type: Number, required:true
    },
    email: {
      type: String, required: true  
    },
    telefone: {
      type: String, required: true  
    },
    status :{
        type: String, required: true
    },
    tipo: {
        type: Schema.Types.ObjectId, ref:'tipoCliente', required: true
    }
})

db.model('clientes', Cliente);