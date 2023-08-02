const express = require('express');
//require('./config/connect');
const app = express()

const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors')

//const User = require('./config/models/user');
app.use(cors)
const server = http.createServer(app)

const io  = new Server(server, {
    cors:{
        origin:'http://localhost:3000',
        methods: ['GET','POST'],
    }
})

io.on('connection',(socket)=>{
    //console.log(socket.name)
    socket.on('send-msg',(data)=>{
        socket.broadcast.emit('msg',data)
    })
    

})
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://node1:27017,node2:27017,node3:27017/ecommerce?replicaSet=rs0';
const dbName = 'ecommerce';
const User = require('./config/models/user')


MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("Error connecting to MongoDB replica set:", err);
    } else {
      console.log("Connected successfully to MongoDB replica set");
  
      const db = client.db(dbName);
  
      // Start your express.js app here
      app.listen(3001, function() {
        console.log('Express.js app listening on port 3000');
      });
    }
  });

 /*const usr = new User({
    name:'tt',
    email:'emil',
    password:'',
 })


 //usr.save()
server.listen(3001,()=>{
    console.log('server is working')
})*/
