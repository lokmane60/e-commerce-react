//import axios from "axios";
import { useState ,useEffect} from "react"
import Product from '../productsComponent/productsComponent'
import { useDispatch, useSelector } from 'react-redux';
import { SetProducts } from "../../redux/reducers/postsSlice";
import Api from "../api.js/Api";

const List_products=()=>{

  const[products,setProducts]= useState(null)
  //const products = useSelector((state)=>state.posts.items)
  const dispatch = useDispatch()
  /*const url ='product/products'
  const config = {
    method:'GET'
  }
  const [Data,Loadind,Err] = Api(config,url)
  {Data && console.log(Data, 'rr')}

    Data && dispatch(SetProducts(Data))*/

  //useEffect(
    //dispatch(SetProducts(Data)),[Data])
      //const [image, setImage] = useState(null);

      useEffect(() => {
        fetch('https://dummyjson.com/products/',{
          method:'GET'
        })
        .then(response => {
          
          return response.json()
          console.log(response)
          
          //setProducts(response.data)
          //console.log(products)
          
          
        }).then(data=>{
          setProducts(data.products)
          
          dispatch(SetProducts(data.products))
          
        })
    }, []);
  
  return (
    <><div className=" text-center" ><div className="row justify-content-center"><Product/></div></div>
    </>

    
  )
}

export default List_products