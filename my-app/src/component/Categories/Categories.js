import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
  const categorie=[]
    const Products = useSelector(state=>state.posts.items)
    Products.forEach(element => {
      if (!categorie.includes(element.category)) {
        categorie.push(element.category);
    }
    });
    
    const show =categorie.map(data=>{
      return(
        <li className='list-group-item text-center' style={{background:' #ececec'  ,color:'#142d4c '}} >{data}</li>
      )
    })
    return (
    <>
        <ul className='list-group'  >
          <li className='list-group-item fw-bold  text-center ' style={{background:'#385170',color:'#ececec'}}>CATEGORY</li>
          {show}
          </ul>
        

    </>
  )
}

export default Categories