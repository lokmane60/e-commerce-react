import axios from 'axios';
import React, { useState } from 'react'

import { useDispatch} from 'react-redux';
import {useNavigate}  from 'react-router-dom'
import { validUser} from "../../redux/reducers/postsSlice";

const LoginForm = () => {
    const dispatch = useDispatch()
    const[email,setEmail]= useState();
    const navig = useNavigate()
    
    
    const[Password,setPassword]= useState();

    
    const checkLogin =async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/user/login',{
            
            email:email,
            password:Password
        
        }).then(async(r)=>{handlValid(r.data)
            dispatch(validUser(true))
            navig("/admin")
        }
        )
        }
        catch(err){
            console.log(err)
        }
        
    }
    const handlValid =(data)=>{
        
        localStorage.setItem('token',data)
        
    }
  return (
    <>
        <div className='container d-flex justify-content-center mt-5 ' s>
            <form  onSubmit={checkLogin} className='pt-3 p-4 rounded-3' style={{width:'300px',background:'#142d4c'}}>
            <legend style={{color:'#ececec'}}>LOGIN</legend>
                <div className='form-group p-1'>
                    <input className='form-control' type='text' placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className='form-group p-1'>
                <input className='form-control' type='password' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    </>
  )
}

export default LoginForm