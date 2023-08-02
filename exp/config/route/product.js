const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')

filename=[];

const mystorage = multer.diskStorage({
    destination : './uploads',
    filename :(req , file, redirect)=>{
        let date = Date.now()
        let fl = date+ '.' + file.mimetype.split('/')[1];
        redirect (null ,fl)
        filename.push(fl)
    }
})
const upload = multer({storage: mystorage})

router.post("/addProduct",upload.array('files') , async(req,res)=>{
    try {
        data = req.body;
        console.log(req.files)
        prod =  new Product(data);
        
        prod.image = filename
        console.log(prod.image)
        savedProduct = await prod.save();
        filename=[]
        res.status(200).send(savedProduct)
    } catch (err) {
        res.status(400).send(err);
    }
    
})


router.get('/products',(req,res)=>{
    Product.find()
    .then(
        (products)=>{
            res.send(products)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})
router.get('/getproduct/:id',(req,res)=>{
    myid = req.params.id
    console.log(myid)
    Product.findOne({_id:myid})
    .then(
        (pro)=>{
            res.send(pro)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )

})

module.exports = router ;