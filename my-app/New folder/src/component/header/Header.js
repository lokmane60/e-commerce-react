import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './header.css'
const Header = () => {
  const cart = useSelector(state=>state.posts.cart)
  const n = cart.length
  return (
    <div className='container navbar navbar-expand-lg navbar-light bg-light'>Header
        <Link className='nav-link' to={`/cart`}><p className=' text-danger'>Cart{n}</p>
        </Link>
        <Link className='nav-link' to={`/login`}><p className=' text-danger'>login</p>
        </Link>
    </div>
  )
}

export default Header