import React from 'react'
import search from './search.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
  return (
    <div className='container d-flex justify-content-center'>
        
        <InputGroup className="mb-5 mt-4 " style={{width:'300px'}}>
        <Form.Control 
            type="search"
            placeholder='Search..'
           
        />
        <button className='btn'><img style={{width:'19px'}} src={search} /></button>
        </InputGroup>
    </div>
  )
}

export default SearchBar