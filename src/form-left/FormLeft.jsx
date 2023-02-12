import React from 'react'
import './FormLeft.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormRight from '../form-right/FormRight';

const FormLeft = () => {
  const [showData, setShowData] = useState(false)
  const [data, setData] = useState({
    title:"",
    author:"",
    isbn:"",
  });

  const handleChange=(e)=>{
    const {name, value} = e.target; 
    setData((prev)=>{ return {...prev,[name] : value} });
  }
    
  const handleSubmit =(e) =>{
    e.preventDefault();
    setShowData(prevState => !prevState)
  }

  return (
    <>
      <Form className='form_left-div' onSubmit={handleSubmit}>

        <Form.Group className=" inner-div mb-3" controlId="formBasic">
          <Form.Label className='form-title'>Title</Form.Label>
          <Form.Control className='form-input' type="text" name="title" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="inner-div mb-3" controlId="formBasic">
          <Form.Label className='form-title' >Author</Form.Label>
          <Form.Control className='form-input' type="text" name="author" onChange={handleChange} />
        </Form.Group> 

        <Form.Group className=" inner-div mb-3" controlId="formBasic">
          <Form.Label className='form-title'>ISBN#</Form.Label>
          <Form.Control className='form-input' type="text" name="isbn" onChange={handleChange}/>
        </Form.Group> 

        <Button variant="success" type="submit" size="lg"className='btn-add'> ADD</Button>

      </Form>
      {
        showData ? <FormRight {...data} /> : <FormRight />   
      }
    </>
  )
}

export default FormLeft