import axios from 'axios';
import React, { useState } from 'react'
import Api from "../api.js/Api";
import {useNavigate}  from 'react-router-dom'

const LoginForm = () => {
    const[email,setEmail]= useState();
    const navig = useNavigate()
    const[url,setUrl]= useState();
    const[Config,setConfig]= useState();
    
    const[Password,setPassword]= useState();
    //const[Data,setData]= useState();
    
    const checkLogin =async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/user/login',{
            name: "email@g.com",
            email: "email@g.com",
            password:"1234"
        
        }).then(r=>{handlValid(r.data)
        console.log(r.data)
    navig("/admin")}
        )
        }
        catch(err){
            console.log(err)
        }
        
    }
    const handlValid =(data)=>{
        localStorage.setItem('token',data)
        //return <Navigate to='/admin' replace={true}/>
    }
  return (
    <>
        <div className='container'>
            <form  onSubmit={checkLogin}>
                <div className='form-group'>
                    <input className='form-control' type='text' placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className='form-group'>
                <input className='form-control' type='text' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    </>
  )
}

export default LoginForm