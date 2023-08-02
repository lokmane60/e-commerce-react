const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Inscreption = require('../models/inscreption')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Token = require('../models/token');
const crypto = require('crypto')
const SendEmail = require('../../utils/SendEmail')
//const { validate } = require('../models/user');

router.post('/prodact',async(req,res)=>{
    try{
        let token =req.body.token
        console.log(token);
        var decoded = jwt.decode(token);
        console.log(decoded);

    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/reg',async(req,res)=>{
    try{
        data = req.body
        console.log(data)
        ins = new Inscreption(data)
        saved = await ins.save()
        res.status(200).send(saved)

    }catch(e){
        res.status(500).send(e)
    }
})

router.post("/login",async(req,res)=>{
    try{
        let data= req.body
        let user = await User.findOne({email:data.email})
        validPass = bcrypt.compareSync(data.password, user.password)
        if(!user || !validPass)
            return res.status(409).send({message:'this user is not  exist !!'})
        if(!user.verifed)
            return res.status(409).send({message:'this user is not verifed !!'})
        
        pyload={
            _id : user._id,
            email: user.email,
            name : user.name,
            password :user.password
        }
        let token_user = jwt.sign(pyload ,'555')
        res.status(200).send(token_user);
        console.log("scc")
            
    }       
    catch(e){
        res.status(500).send({message:e})
    }
})
router.post("/verify",async(req,res)=>{
    try{
        let data= req.body
        let user = await User.findOne({_id : data.id})
        if(!user)
            return res.status(409).send({message:'this user is not  exist !!'})
        if(user.verifed)
            return res.status(409).send({message:'this user is already verifed!!'})
        let token = await Token.findOne({user_id : data.id,token:data.code})
        if(!token)
            return res.status(409).send({message:'you need to sign up!!'})
        await User.updateOne({_id:data.id,verifed:true})
        await token.remove()
        res.status(200).send({message:'email verifed!!'})
    } catch(e){
        res.status(500).send({message:e})
    }
    

})  
router.post("/signup",async(req,res)=>{
    try {
        
        let data= req.body
        
        let user = await User.findOne({email : data.email})
        if(user)
            return res.status(409).send({message:'this with given email already exist !!'})
        
        
        salt = bcrypt.genSaltSync(13)
        cryptPass = await bcrypt.hashSync(data.password,salt)
        
        user= await new User({...req.body,password: cryptPass}).save()
        
        let tok= await new Token({
            user_id:user._id ,
            token: crypto.randomBytes(3).toString('hex'),

        }).save()
        
        console.log(tok.token)
        await SendEmail(user.email,'verify email',tok.token)
        res.status(200).send({user,message:'verify your email'})

        /*let usr = await new User(data);
        salt = bcrypt.genSaltSync(13)
        cryptPass = await bcrypt.hashSync(data.password,salt)
        usr.password = cryptPass;
        usr.save();
        res.send(usr)
    } catch (err) {
        res.send(err);
    }
    
})
router.post("/login",async(req,res)=>{
    try {
        //res.send({"y":"pp"})
    
    data = req.body;
    console.log(data)
    user = await User.findOne({email : data.email})
    if(!user){
        res.status(404).send("email or pasword invalide !")
    }
    else{
        validPass = bcrypt.compareSync(data.password, user.password)
        if(!validPass){
            res.status(400).send("email or pasword invalide!")
        }
        else{
            pyload={
                _id : user._id,
                email: user.email,
                name : user.name,
                password :user.password
            }
            let token = jwt.sign(pyload ,'555')
            res.status(200).send(token);
            console.log("scc")*
        }
    }*/
    } catch (err) {
        res.status(500).send(err)
    }
    
})
module.exports = router ;