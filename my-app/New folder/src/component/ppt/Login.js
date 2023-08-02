//import React, { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
const Login = () => {

  /*useEffect(()=>{
    fetch("http://localhost:5000/pp/",{
      method : "POST",
      headers : {"Content-Type": "application/json"},
      //mode : 'cors',
      body : JSON.stringify({"gg":"jjk"})
    })
    .then((r)=>{return r.json()})
    .then((data)=>{console.log(data)})
  },[])*/
    const [Name,SetName] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetAdress] = useState("");
    const handlform = (e)=> {
      e.preventDefault();
    let state ={
      name: Name,
      email :Email,
      password: Password,
    }
    //fetch("http://localhost:5000/user/create").then((r)=>{return r.json()}).then((data)=>{console.log(data)})

    axios.post("http://localhost:5000/user/login",
      //method : "POST",
      //headers : {"Content-Type": "application/json"},
      //mode : 'cors',
      //body : JSON.stringify(state)
      state
    ).then((r)=>{
      console.log(r.data)
      if(r.data){
        localStorage.setItem('token',r.data)
        window.location.href='/dashboard'
      }
      return r})
    //.then((data)=>{console.log(data)})
    }

  return (
    <div>
        <form className="container mt-3" onSubmit={handlform}>
          <h2>register</h2>
            <input className="form-control mt-3" type="text"  placeholder="name" onChange={(e)=>SetName(e.target.value)} value={Name}/>
            <input className="form-control mt-3" type="email" placeholder="email" onChange={(e)=>SetEmail(e.target.value)} value={Email}/>
            <input className="form-control  mt-3" type="password" placeholder="Password" onChange={(e)=>SetAdress(e.target.value)} value={Password}/>
            <input className=" btn btn-primary mt-5" type="submit"/>
        </form>
    </div>
  )
}

export default Login