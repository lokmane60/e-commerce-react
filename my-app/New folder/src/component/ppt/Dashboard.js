import jwtDecode from 'jwt-decode'

import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [user,setUser]= useState({});
    useEffect(() => {
      const token = localStorage.getItem('token')
        if(token){
            setUser(jwtDecode(token))
            console.log(user)
    }}, [])
    
  return (
    <>
    <h1>gg{user.password}</h1>
    </>
  )
}

export default Dashboard