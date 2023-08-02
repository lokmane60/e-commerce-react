import React  from 'react'
import {useEffect,useState} from 'react'
import Product from '../component/product/Product'
import {  useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../component/header/Header'

//import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    //console.log(useParams())
    const {id} = useParams()
    const[product,setProduct]= useState()
    //const cart = useSelector(state=>state.posts.cart)
    useEffect(()=>{
      axios.get(`http://localhost:5000/product/getproduct/${id}`)
      .then(
          (res)=>{
            console.log(res.data)
              setProduct(res.data)
             
              
          }
      )},[])
  
    return (
    <>
    <div><Header/></div>
    {
      product &&
      <Product product={product}/>
    }
    
    
    
    </>
  )
}

export default ProductDetail