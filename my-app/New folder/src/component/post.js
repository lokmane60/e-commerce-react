import React from 'react'

import Imga from './grid.png'


const post = ({post,handldelete}) => {

  return (
    <div className='cont'>
      <div className='post'>
      <img src={Imga}/>
        <div className='auther'>{post.name}</div>
      <h3>{post.title}</h3>
      <button className='btn ' onClick={()=>handldelete(post.id)}>delete</button>
    </div>
    </div>
    
    
  )
}

export default post