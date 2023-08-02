import React, { useEffect, useState } from 'react'
import Post from './post.js'

const Contain_j = () => {
  const [Posts , SetPost]= useState(null);
  const [isloading,setloading] = useState(false);
  const handldelete = (id)=>{
    let cur = [...Posts];
    let newp = cur.filter((post)=> post.id !==id);
    SetPost(newp);
    
  
  }
  let [name, setName] = useState("ali");
  const changeName =()=>{
    setName('hh');
  }

  useEffect(()=>{
    setloading(true)
    fetch("http://localhost:5000/all")
    .then((res)=>{
      if(!res.ok){
        console.log("not ok");
      }
      return res.json()
    }).then(data=>{
      //console.log(data)
      SetPost(data)
      setloading(false)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[]);
  const state ={"name" : "tnb1" , "lastname": "ythis is the title" , "age" : 2}
   
  useEffect(()=>{
    fetch("http://localhost:5000/add",{
      method : "POST",
      headers : {"Content-Type": "application/json"},
      //mode : 'cors',
      body : JSON.stringify(state)
    })
  },[])
console.log(state)
  return (
    <div className='contain'>
      
      {Posts && Posts.map((post)=> (
        <Post key = {post.id} post = {post} handldelete={handldelete}/> 
      )) }
      {
        isloading && (<h1> loading...</h1>)
      }
    
    
    </div>
    
  )
}

export default Contain_j