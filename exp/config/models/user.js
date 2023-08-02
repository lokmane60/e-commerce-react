const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    phone : {
        type : Number,
        default:0001
    },
    verifed : {
        type : Boolean,
        default:false
    },
    

})



module.exports = User;