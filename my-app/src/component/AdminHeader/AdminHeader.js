import React from 'react'
import Button from 'react-bootstrap/Button';
import AddProduct from '../AddProduct/AddProduct';
import add from './add.png'

const AdminHeader = () => {
  return (
    <div className='container '>
        
            <h1 className='text-center mt-3 display-3'>DASHBOARD</h1>
            <h6 className='text-center' >WELCOM TO ADMIN PANEL</h6>
            <div className='d-flex mt-5 justify-content-center'><AddProduct/></div>
        
    
    </div>
  )
}

export default AdminHeader