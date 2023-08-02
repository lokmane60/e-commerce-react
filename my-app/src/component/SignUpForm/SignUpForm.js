import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './sing.css'

const SignUpForm = () => {
    const[conferm,setConferm]= useState(false)
    const[name,SetName]=useState()
    const[id,Setid]=useState()
    const[Code,SetCode]=useState()
    const[Email,SetEmail]=useState()
    const[Password,SetPassword]=useState()
    const[Phone,SetPhone]=useState()
    const[listP,SetlistP]=useState([])
    const cart =  useSelector((state)=>state.posts.cart)
    useEffect(()=>{
        cart.map(product=>{
            SetlistP(list =>[...list,product.title])
        })
    },[cart])
    
    const handlSign=async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/user/reg',{
            name:name,
            email:Email,
            //password:Password,
            phone:Phone,
            cart:listP,
        
        }).then(r=>{
            console.log(r.data)
            Setid(r.data.user._id)
            setConferm(true)}
        )
        }
        catch(err){
            console.log(err.response.data)
        }
    }
    const handlConderm=async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/user/verify',{
            id:id,
            code:Code,
        
        }).then(r=>{
            console.log(r.data)
            setConferm(true)}
        )
        }
        catch(err){
            console.log(err.response.data)
            
        }
    }
    return (
        <div>
            { !conferm ?
            <div className='container'>
                
            <Form  onSubmit={handlSign}>
                <div className='form-group '>
                    <input className='form-control' type='email' placeholder='email' 
                    onChange={(e)=>SetEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='text' placeholder='Name' 
                    onChange={(e)=>SetName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='number' mim='0500000000' max='0799999999' placeholder='phone' 
                    onChange={(e)=>SetPhone(e.target.value)} />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='password' placeholder='password' 
                    onChange={(e)=>SetPassword(e.target.value)} />
                </div>
                
                <button className='btn btn-primary' > Sign Up</button>
            </Form>
        </div>
            :
            <div className='container'>
                <Form  onSubmit={handlConderm}>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='code' 
                        onChange={(e)=>SetCode(e.target.value)} />
                    </div>
                    <button className='btn btn-primary' >verify</button>
                </Form>
            </div>}
        </div>
        
      )
}

export default SignUpForm