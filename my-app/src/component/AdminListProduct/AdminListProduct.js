import React, { useEffect, useState } from 'react'

import axios from 'axios';
import List from './List';

const AdminListProduct = () => {
    const [products,setProducts]= useState([])
    const Po = null
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/')
        .then(res => setProducts(res.data.products))
        
        
        
    
        
    },[])
    if(products!=null){
        products.map(data=>{
          return(
            <div>data.title</div>
          )
            //console.log(data.title)
        })
    }
        
    
    
    //const ListProducts = products.map((data)=>{
        return(
            <>
    <List products={products}/>
    </>
        )
    //})
    
    


}
    
  


export default AdminListProduct