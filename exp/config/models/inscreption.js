const mongoose = require('mongoose')


const Inscreption = mongoose.model('Inscreption',{
    name:{
        type : Object
    },
    phone :{
        type : String
    },
    email :{
        type : String
    },
    
    cart:{
        type:Object
    }
})


module.exports = Inscreption;