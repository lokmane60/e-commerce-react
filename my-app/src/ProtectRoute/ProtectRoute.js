import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({user,redirectPath='/login',children}) => {
    
    if(!user){
        return <Navigate to={redirectPath}/>
    }
    return children
}

export default ProtectRoute