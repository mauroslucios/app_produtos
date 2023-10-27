const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db:27017/levo_app').then(()=>{
    console.log('Mongodb connected...')
}).catch((err)=>{
    console.log(`There was an error connecting to mongod: ${err}` )
})

module.exports = mongoose