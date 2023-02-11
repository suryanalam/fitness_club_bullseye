import React from 'react'
import './FormLeft.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormRight from '../form-right/FormRight';
const FormLeft = () => {

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [isbn, setIsbn] = useState();


    const handleChange1=(e)=>
    {
        setTitle(e.target.value);
    }
    const handleChange2=(e)=>
    {
        setAuthor(e.target.value);
    }
    const handleChange3=(e)=>
    {
        setIsbn(e.target.value);
    }

  const handleSubmit =(e) =>{
    e.preventDefault();
    // let titleName = title;
    // let authorName = author;
    // let isbnValue = isbn;
    // <FormRight title ={titleName} author={authorName} isbn = {isbnValue}/>
    const result =[title, author, isbn]
    console.log(result);
    <FormRight result={result}/>
  }

  return (
    <>
    <Form className='form_left-div' onSubmit={handleSubmit}>
      <Form.Group className=" inner-div mb-3" controlId="formBasic">
        <Form.Label className='form-title'>Title</Form.Label>
        <Form.Control className='form-input' type="text" name="title" value={title} onChange={handleChange1}/>
      </Form.Group>

      <Form.Group className="inner-div mb-3" controlId="formBasic">
        <Form.Label className='form-title' >Author</Form.Label>
        <Form.Control className='form-input' type="text" name="author" value={author} onChange={handleChange2} />
      </Form.Group> 

      <Form.Group className=" inner-div mb-3" controlId="formBasic">
        <Form.Label className='form-title'>ISBN#</Form.Label>
        <Form.Control className='form-input' type="text" name="isbn" value={isbn} onChange={handleChange3}/>
      </Form.Group> 

      <Button variant="success" type="submit" size="lg"className='btn-add'>
        ADD
      </Button>

    </Form>
    </>
  )
}

export default FormLeft