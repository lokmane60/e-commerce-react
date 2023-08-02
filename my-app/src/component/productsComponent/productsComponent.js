import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link ,useParams} from 'react-router-dom'
import "./productsComponent.css"
import Card from 'react-bootstrap/Card';

const Product = () => {
  const prods = useSelector((state)=>state.posts.items)
  //console.log(prods)

  const renderList = prods.map((prod)=>{
    
    return (
      //<div>gg</div>
      
      <Card className='listProduct m-2 shadow-sm'>
        <Link className='mylink' to={`/product/${prod.id}`}>
        <Card.Img src={prod.images[0]}/>
        <Card.Body>
        <Card.Title className='cardtitle'>{prod.title}</Card.Title>
        </Card.Body>
        </Link>
      </Card>
     
      /*<div className='card  m-2 listProduct' >
        <Link to={`/product/${prod.id}`}>
          <img className='card-img-top' src={prod.images[0]}alt={prod.title}/>

        </Link>
      </div>*/
    )
  })
  
    /*<div>
      <Link to={`/product/${prod.id}`}/>
    </div>
  :'oo')*/
  
  return (
    <>{renderList}</>
    /*<div>
      <img  key = {product.id} src={`http://127.0.0.1:5000/getimage/${prop.src}`}/>
    </div>*/
  )
}

export default Product