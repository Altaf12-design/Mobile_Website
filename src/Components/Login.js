import { Icon, TextField } from '@mui/material'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import './Practice/pp.css'
import ist from './Practice/logo.jpg'
const Login = () => {
  return (
  

<nav className="navbar navbar-expand-lg bg-dark">
  <div className='container'>
  <a className="navbar-brand" href="#" > <img src={ist} className='wi'  alt='logo...'/></a>
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li>
       
        
      
      </ul>
     
    </div>
  </div>
  </div>
</nav>
  
  )
}

export default Login