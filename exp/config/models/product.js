const mongoose = require('mongoose')


const Product = mongoose.model('Product',{
    dimention:{
        type : Object
    },
    description:{
        type : String
    },
    title :{
        type : String
    },
     
    colors :{
        type : [Object]
    },
    image:{
        type:[String]
    }
})


module.exports = Product;