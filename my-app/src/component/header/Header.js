import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './images.png' 
import './header.css'
const Header = () => {
  const cart = useSelector(state=>state.posts.cart)
  const n = cart.length
  return (
    <>
    


    <Navbar className='mynav shadow-sm'  expand="lg">
      <Container>
        <Navbar.Brand href="/">MTShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='linkCart' to={`/`}>Home</Link></Nav.Link>
            <NavDropdown className='linkCart' title="" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link className='linkCart' to ={`/cart`}><img src={Cart} />{n !=0 && <span>{n}</span>}</Link></Nav.Link>

            <Nav.Link ><Link className='linkCart'  to={`/login`}>Login</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



    </>
    /*<div className='container navbar navbar-expand-lg navbar-light  headerr'>Header
        <Link className='nav-link' to={`/cart`}><p className=' text-danger'>Cart{n}</p>
        </Link>
        <Link className='nav-link' to={`/login`}><p className=' text-danger'>login</p>
        </Link>
    </div>*/
  )
}

export default Header