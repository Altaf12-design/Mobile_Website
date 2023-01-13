import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Portfolio.css'
import ist from '../Practice/all.jpg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Portfolio = () => {
  return (
  

<nav className="navbar navbar-expand-lg bg-dark">
  <div className='container'>
  <a className="navbar-brand" href="#" > <img src={ist} className='wi'  alt='logo...'/></a>
  

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto" >
        <li className="nav-item">
          <a class="nav-link" href="#">Home</a>
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
</nav>
  
  )
}

export default Portfolio