import React from 'react'
import { useSelector } from 'react-redux'
import {  Link, useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Myform from './Form';


const CartComponent = () => {
    const navigate = useNavigate()
    console.log('ggt')
    const cart = useSelector(state=>state.posts.cart)
    const handlAchat =()=>{
      navigate("/SignUp")
    }
    const renderList = cart.map((prod)=>{
    
        return (
          
          <>
          
            <div className=' container row p-3  align-items-center ' >
              <Col><Link to={`/product/${prod.id}`}>
                
                <img className=' card-img-top' style={{width:'240px'}} src={prod.images[0]} />
                
                
              </Link></Col>
              <Col><div>{prod.title}</div></Col>
              <Col><div>{prod.price}$</div></Col>
              
              
            </div>
            </>
          
        )
      })

      
    
    return (
    <div className='container justify-items-center' >{renderList}
    <div className='row align-items-center '>
       </div>
    <Myform/>
    </div>
    
  )
}

export default CartComponent