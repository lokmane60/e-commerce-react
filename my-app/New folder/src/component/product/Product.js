import axios from 'axios'
import React, { useState }  from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import "./product.css"
import { AddToCart } from '../../redux/reducers/postsSlice'
//import { SelProduct } from "../../redux/reducers/postsSlice";
import Alert from 'react-bootstrap/Alert';
import Slider from '../slider/slider'

const Product = (prop) => {

    const product = prop.product
    /*console.log(prop)
    console.log(product)*/
    const[colorSelected,setColorSelected]=useState('')
    const[dimentionSelected,setDimentionSelected]=useState()
    const cart = useSelector(state=>state.posts.cart)
    const dipatch = useDispatch()
    const itemInCart = cart.find(item => item._id === product._id);
    //console.log(itemInCart)
    const handleAdd=()=>{
        product.colors=colorSelected;
        product.dimention=dimentionSelected;
        dipatch(AddToCart(product))
    }
    const images = product.image;
    
    const colors = product.colors.map(color=>{
        return(
            <Form.Check
            inline
            label={color}
            name="group1"
            type='radio'
            onChange={e=>{setColorSelected(e.target.value)}}
            value={color} required
          />
        )
    })
    const dimention = product.dimention.map(dim=>{
        return(
            <Form.Check
            inline
            label={dim}
            name="group2"
            type='radio'
            onChange={e=>{setDimentionSelected(e.target.value)}}
            value={dim} required
          />
        )
    })

    return (

        
        <div className='container '>
            
            <div  class="card det_product" >
                <div id="carouselExampleSlidesOnly" className='carousel slide' data-bs-ride="carousel">
                    <Slider image={images}/>
                </div>
                
                <div class="card-body">
                
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {itemInCart ? <Alert variant='info' size='sm'>
                    This product already added . do yo want more?
                    </Alert>:''}
                    <Form>
                        <Form.Group>{colors}</Form.Group>
                        <Form.Group>{dimention}</Form.Group>
                        <button type='submit' className='btn btn-primary' onClick={handleAdd}>add</button>
                    </Form>  
            </div>


           


</div>
            
           
        </div>
            
    )
}

export default Product