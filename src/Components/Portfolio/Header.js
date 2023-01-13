import React from 'react'
import './Portfolio.css'
import Typed from "react-typed"
const Header = () => {
  return (
    <div className='header-wraper'>
        <div className='main-info'>
            <h1>Web site promation and create website</h1>
            <Typed 
            className='typed-text'
            strings={["Web Desing","Web Development","Facbook Markting","Google Adds"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />

          <button className='btn btn-primary btn-main-offer'>Contect me</button>
        </div>
    </div>
  )
}

export default Header