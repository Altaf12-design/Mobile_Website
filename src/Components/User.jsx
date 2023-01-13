import { display } from '@mui/system'
import React from 'react'

const User = (props) => {
  console.log(props)
 
    
  return (
  
  <div className='col-md-2 col-sm-6 card'>
  
 
 <img src={props.img}/>
  <h6>{props.name}</h6>
  <h6>{props.email}</h6>
  {/* <button onClick={()=>newuser(props.id)} className='btn btn-success'>Remove</button> */}
<div>

</div>

  </div>

  
  
  
  
  )
}

export default User