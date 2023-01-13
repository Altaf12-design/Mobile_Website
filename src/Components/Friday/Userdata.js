import React from 'react'

const Userdata = (props) => {
    console.log(props)
  return (
  
  <div className='col-md-2 col-sm-6 card'>
  
 
 <img src={props.id}/>
  <h6>{props.name}</h6>


  </div>
  

  )
}


export default Userdata



