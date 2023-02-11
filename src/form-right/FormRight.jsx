import React from 'react'
import './FormRight.css'
import Table from 'react-bootstrap/Table';

const FormRight = ({title, author, isbn}) => {
  return (
    <div className='form_right-div'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{author}</td>
          <td>{isbn}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default FormRight