import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';

const CartComponent = () => {

    const cart = useSelector(state=>state.posts.cart)
    
    const renderList = cart.map((prod)=>{
    console.log(prod)
        return (
          //<div className='container'>
          
            <div className='row p-2 align-items-center '>
              <Col><Link to={`/product/${prod._id}`}>
                
                <img className='w-100 card-img-top' src={`http://127.0.0.1:5000/getimage/${prod.image[0]}`} />
                
                
              </Link></Col>
              <Col><div>{prod.title}-{prod.colors}</div></Col>
              <Col><div>prix</div></Col>
              
              
            </div>
          //</div>
        )
      })


    //const P =cart.map(i=>{return(<div>ggg</div>)})
    return (
    <div className='container'>{renderList}
    <div onClick={showForm}>achat</div>
    </div>
    /*<>{
        cart.length > 0 ? ()=>
        {cart.map(item=>{
            <div>{item}</div>
            /*return(
                
                <div>
                    <div>Carttt</div>
            <img src={`http://127.0.0.1:5000/getimage/${item.images}`} />
          </div>
            )
          
        })}
        
      :'no product in your cart'}
        
      </>*/
  )
}

export default CartComponent