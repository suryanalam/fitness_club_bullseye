import React, {useState} from 'react'
import './FormRight.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {FiTrash} from 'react-icons/fi'


const FormRight = ({title,author,isbn,data}) => {

  const [storeData, setStoreData] = useState({});
 
  return (
    <div className='form_right-div'>
      {
        title ? (
                <>
                  <Table >
                      <thead>
                        <tr>
                          <th>ISBN#</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>{isbn}</td>
                            <td>{title}</td>
                            <td>{author}</td>  
                            <td><FiTrash className='delete-icon'/></td>
                        </tr>
                      </tbody>
                  </Table> 
                  <Button variant="danger" className='remove-btn'>Remove All</Button>

                </>

                )
              : (<p className='no-data'>No books are added yet</p>)
      }
    </div>
  )
}

export default FormRight