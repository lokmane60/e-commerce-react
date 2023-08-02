import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const List = (prop) => {
    const Products =prop.products.map(data=>{
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.brand}</td>
                <td>{data.title}</td>
                <td>{data.price} $</td>
                <td><Button variant="outline-info">Edit</Button></td>
                <td><Button variant="outline-danger">Delete</Button></td>
                
            </tr>
        )
    })
  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
      <tr>
          <th>n</th>
          <th>Brand</th>
          <th>Title</th>
          <th>Price $</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
          
      </thead>
      <tbody>
        {Products}
        
        
      </tbody>
    </Table>
    </>
  )
}

export default List