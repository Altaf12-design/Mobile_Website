import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Userdata from '../Friday/Userdata'
import '../Practice/pp.css'
const Form = () => {


const [name,setname] =useState('')
const [devname,setdevname] =useState('')
const [email,setemail] =useState('')
const [position,setposition] =useState('')
const [ischeck,setcheck] =useState('')
const [message,setmessage] =useState('')
const [user, setUser]=useState ([])
const [flag,setflag] =useState(true)
const handleSubmit = (event) => {
    
    event.preventDefault();
    const Userdata={name,devname,email,position,ischeck,message}
    setUser([...user,Userdata])

  }


  return (
    <div >
          <div style={{backgroundImage: ' url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>
          
          
          <div className='mx-5 p-5 shadow-100 d-flex justify-content-center' style={{marginTop: '-150px', background: 'hsla(0, 10%, 95%, 0.8)', backdropFilter: 'blur(100px)'}}>
    
    {flag == true?
     <div className='form col-md-4'>
     <div className='parent'>
         <h2 className="fw-bold mb-5" >Sign up now</h2> 
         
         </div>
         <div className='stylebox'>
         <TextField  type="text" 
         value={name}
         onChange={(e) => setname(e.target.value)}
             id="outlined-basic" label="name" required variant="outlined" />
         <TextField
             value={devname}
             onChange={(e) => setdevname(e.target.value)}
         id="outlined-basic" label="Developer Name" required variant="outlined" />
         </div>
         
         <div className='stylebox2margin '>
         <TextField 
             value={email}
             onChange={(e) => setemail(e.target.value)}
         id="outlined-basic" label="Email" required variant="outlined" />
         <TextField 
             value={position}
             onChange={(e) => setposition(e.target.value)}
         id="outlined-basic" label="position" required variant="outlined" />
         </div>
         <div className='stylebox1'>
         <div className="custom-control custom-radio custom-control-inline">
 <input    value='satisfaid'
             onChange={(e) => setcheck(e.target.value)}
 type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
 <label className="custom-control-label">Satisfied</label>
 </div>
 <div className="custom-control custom-radio custom-control-inline ">
 <input
 value='unsatisfaid'
 onChange={(e) => setcheck(e.target.value)}
 type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
 <label className="custom-control-label" >unsatisfaid</label>
 </div>
     
         </div>
         <div className='stylebox1 '>
         
         <textarea
             maxlength={50}
         value={message}
         onChange={(e) => setmessage(e.target.value)}
         
         className='col-12' id="outlined-basic" label="Message" required variant="outlined" />
             
     
         </div>
         <p>{message.length}/{50-message.length}</p>
         <div className="row justify-content-center mt-3 mb-5">
         <div className='d-grid gap-2 col-md-6 col-sm-12'>
         <button onClick={handleSubmit} type='submit' className='btn btn-primary bynstyle'>Submit</button>
         
         </div>
     
     </div>
     
     
         
         </div>
   :
   <div style={{width:'50%',height:400,}}>
   <div style={{display:'flex',justifyContent:'space-between',marginLeft:'50px'}}>
   <p>Name</p>
   <p>Email</p>
   <p>Developer</p>
   <p>Email</p>
   <p>Message</p>
   <p>Satisfaction</p>
   </div>
  

  {user.map((item)=>{
   return<>
   <div className='styleshow'>
         <p>{item.name}</p> 
         <p>{item.email}</p> 
       <span>{item.devname}</span>
       <p>{item.position}</p>
       <p>{item.ischeck}</p>
       <p>{item.message}</p>

       </div>
   </>
   
  
   
  })}
   </div>
}
       
          
           </div>
           <div>
            <button onClick={()=>setflag(false)}>show</button>
            <button onClick={()=>setflag(true)}>hid</button>
           </div>
           
            </div>
            
        
         
    

  )
}

export default Form