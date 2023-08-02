import React  from 'react'
import {useEffect,useState} from 'react'
import Product from '../component/product/Product'
import {  useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../component/header/Header'
import Categories from '../component/Categories/Categories'
import SearchBar from '../component/SearchBar/SearchBar'

//import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    //console.log(useParams())
    const {id} = useParams()
    const[product,setProduct]= useState()
    //const cart = useSelector(state=>state.posts.cart)
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`)
      .then(
          (res)=>{
            console.log(res.data)
              setProduct(res.data)
             
              
          }
      )},[])
  
    return (
    <>
    <Header/>
    <SearchBar/>
    <div className='row'>
        <div className='col-2 '><Categories /></div>
        <div className='col-10'>{
      product &&
      <Product product={product}/>
    }</div>
    </div>
    
    
    
    
    </>
  )
}

export default ProductDetail