const mongoose = require('mongoose')


const Token = mongoose.model('Token',{
    user_id:{
        type : String
    },
    token:{
        type : String,
        
    },
    
    
})


module.exports = Token;