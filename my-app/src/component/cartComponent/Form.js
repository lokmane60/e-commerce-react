import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Myform() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{width:'1100px'}} variant="success" onClick={handleShow}>
        Buy now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={''}>
                <div className='form-group '>
                    <input className='form-control' type='email' placeholder='email' 
                    //onChange={(e)=>SetEmail(e.target.value)}
                     />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='text' placeholder='Name' 
                    //onChange={(e)=>SetName(e.target.value)} 
                    />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='number' mim='0500000000' max='0799999999' placeholder='phone' 
                    //onChange={(e)=>SetPhone(e.target.value)} 
                    />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='password' placeholder='password' 
                    //onChange={(e)=>SetPassword(e.target.value)} 
                    />
                </div>
                
               
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Myform