import React, { useEffect, useState } from 'react'

const Api = (config,url) => {
    const[Data,setData]=useState()
    const[Loadind,setLoading]=useState(null)
    const[Err,setErr]=useState()
    useEffect(()=>{
        if(url!=null){
          let l = 'http://127.0.0.1:5000/'+url
          console.log(l)
          setLoading(true)
          fetch(l,config)
          .then(response => {
            
            return response.json()
          }).then(data=>{
            setData(data)
            console.log(data)
            setLoading(false)
            
          }).catch(err=>{
              console.log(err)
              setErr(err)
              setLoading(false)
          })}

    },[])
  return [Data,Loadind,Err]
}


export default Api