const express = require('express');
require('dotenv').config()
require('./config/connect');

console.log(process.env.S3_BUCKET)
//const User = require('./config/models/user');
const cors =require('cors');
const UserRoute = require('./config/route/user')
const ProductRoute = require('./config/route/product')


const nodemailer = require('nodemailer')
/*const tranporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'lokman00160',
        pass:'bruuehgmxhefxbjw'
    }
    
})

const mailOption={
    from:'lokman00160@gmail.com',
    to:'lokmankai.lones@gmail.com',
    subject:'send email througt nodemailer',
    text:'that was ez'
}
tranporter.sendMail(mailOption,function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log('email sent :' + info.response)
    }
})*/
const app = express();

const server = app.listen(5000, ()=>{
    console.log("server is working");
})





app.use(cors());
app.use(express.json());



/*app.post('/add', (req , res)=>{
    data = req.body;
    usr = new User(data)
    usr.save()
})


app.get('/all', async (req,res)=>{
    try {
        users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
        
    }
    
})


app.delete('/delete', ()=>{
    console.log("addd");
})
app.put('/update', ()=>{
    console.log("addd");
})*/


app.use('/user',UserRoute)
app.use('/product',ProductRoute)
app.use('/getimage' , express.static('./uploads'))

