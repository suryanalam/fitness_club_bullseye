import React from 'react'
import FormLeft from '../form-left/FormLeft'
import FormRight from '../form-right/FormRight'
import './Main.css'
const Main = () => {
  return (
    <section className='Main'>
        <FormLeft />
        <FormRight />
    </section>
  )
}

export default Main