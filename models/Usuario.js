const db = require('../database/connection');
const Schema = db.Schema;
//definindo model
const Usuario =  new Schema({
    nome: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    idade: {
        type: Number, required: true
    },
    cep: {
        type: String, required: true
    },
    status: {
        type: Boolean, required: true
    },
    tipo: {
        type: Schema.Types.ObjectId, ref:'tipoUsuario', required: true
    }
})
//Collection
db.model('usuarios', UsuarioSchema)

//definindo novo usuário
const Usuario = db.model('usuarios');
/*
new Usuario({
    nome: 'Mauro Lucio',
    sobrenome: 'Pereira da Silva',
    email: 'mauroslucios@gmail.com',
    idade: 51,
    pais: 'Brasil'

}).save().then(() => {
    console.log("Usuário criado com sucesso")
}).catch((err) => {
    console.log("Houve um erro ao criar o usuário"+ err)
})*/