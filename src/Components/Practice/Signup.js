import { TextField } from '@mui/material'
import React from 'react'
import './pp.css'
const Signup = () => {
  return (
    <div >
          <div style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>
          <div className='mx-5 p-5 shadow-100 d-flex justify-content-center' style={{marginTop: '-150px', background: 'hsla(0, 10%, 95%, 0.8)', backdropFilter: 'blur(100px)'}}>
     <div className='col-md-4'>
      <div className='parent'>
           <h2 className="fw-bold mb-5" >Sign up now</h2>  
           </div>
           <div className='stylebox'>
           <TextField id="outlined-basic" label="name" required variant="outlined" />
           <TextField id="outlined-basic" label="last name" required variant="outlined" />
           </div>
          
           <div className='stylebox2margin '>
           <TextField id="outlined-basic" label="Email" required variant="outlined" />
           <TextField id="outlined-basic" label="Country" required variant="outlined" />
           </div>
           <div className='stylebox1 '>
           <TextField id="outlined-basic" label="Phone No." variant="outlined" />
     
           </div>
           <div className='stylebox1 '>
           <TextField className='col-12' id="outlined-basic" label="Message." required variant="outlined" />
     
           </div>
           <div class="row justify-content-center mt-3 mb-5">
          <div className='d-grid gap-2 col-md-6 col-sm-12'>
          <button type='submit' className='btn btn-primary bynstyle'>SIGNUP</button>
        
          </div>
        
      </div>
           </div>
           
           </div>
            </div>
            
        
         
    

  )
}

export default Signup