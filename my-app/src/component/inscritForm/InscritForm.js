import React from 'react'
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';


const InscritForm = () => {
    const cart = useSelector(state=>{state.posts.cart})
    const handleInscrit =()=>{
        fetch('http://127.0.0.1:5000/inscreption/inscrit',{
          method:'POST',
            body:cart
        })
        .then(response => {
          
          return response.json()
          console.log(response)
          
          /*setProducts(response.data)
          console.log(products)*/
          
          
        }).then(data=>{
          //setProducts(data)
          console.log(data)
          dispatch(SetProducts(data))
          
        })
    }
  return (
    <div className='container'>
        <Form  onSubmit={handleInscrit}>
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Prenom' 
                onChange={(e)=>setFirsrName(e.target.value)} />
            </div>
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Nom' 
                onChange={(e)=>setLastName(e.target.value)} />
            </div>
            <div className='form-group'>
                <input className='form-control' type='number' mim='0500000000' max='0799999999' placeholder='phone' 
                onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <div className='form-group'>
                <input className='form-control' type='email' placeholder='Email' 
                onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
            <button onClick={handleInscrit}></button>
        </Form>
    </div>
  )
}

export default InscritForm