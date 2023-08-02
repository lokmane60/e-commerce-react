import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link ,useParams} from 'react-router-dom'
import "./productsComponent.css"

const Product = () => {
  const prods = useSelector((state)=>state.posts.items)


  const renderList = prods.map((prod)=>{
    console.log(prod.image)
    return (
      //<div>gg</div>
      <div className='card col-5 col-lg-4 m-2' >
        <Link to={`/product/${prod._id}`}>
          <img className='card-img-top' src={`http://127.0.0.1:5000/getimage/${prod.image[0]}`} alt={prod.title}/>
        </Link>
      </div>
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