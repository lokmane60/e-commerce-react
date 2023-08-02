import React from 'react'
//import List_products from './component/list_products/List_products'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Cart from './pages/cart'
import ProductDetail from './pages/productDetail'
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
//import Product from './component/product/product'


const App = () => {
  return (
    //<Home/>
    <div>
      <Router>
        <Routes>
         
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/product/:id' element={<ProductDetail/>}/>
          
        
        </Routes>
      </Router>
      
    </div>
  )
}

export default App