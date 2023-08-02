import React from 'react'

import Admin from './pages/Admin'
import Home from './pages/Home'
import Cart from './pages/cart'
import ProductDetail from './pages/productDetail'
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useSelector } from 'react-redux'
import ProtectRoute from './ProtectRoute/ProtectRoute'



const App = () => {
  const isValid = useSelector((state)=>state.posts.isValid)
  
  
  
  return (
    //<Home/>
    <div>
      <Router>
        <Routes>
         
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/admin' element={
            <ProtectRoute user={isValid}>
              <Admin/>
            </ProtectRoute>
          }
          />
          
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/SignUp' element={<SignUp/>}/>
          <Route exact path='/product/:id' element={<ProductDetail/>}/>
          
        
        </Routes>
      </Router>
      
    </div>
  )
}

export default App