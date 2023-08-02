import { useEffect, useState } from 'react';
//import Posts from './component/posts.js';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Apps = () => {
  const[text,setText]= useState([])
  const[sen,setSend]= useState()
const handlClick= ()=>{
  console.log(sen)
  socket.emit('send-msg',{message:sen})
  
  
}

useEffect(()=>{
  socket.on('msg',(data)=>{
    setText(t=>[...t,data.message])
  })
},[socket])
  
  return (
    < >
    <input type='text' onChange={e=>setSend(e.target.value)} name='inp'/>
    <button onClick={handlClick} >send</button>
    <p>{text.map(m=>{
      return <h2>{m}</h2>
    })}</p>
    
    </>
  )
}

export default Apps