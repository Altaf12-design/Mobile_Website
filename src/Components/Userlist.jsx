import React, { useState } from 'react'
import User from './User'
import './User.css'
import userlist from './Userayy' 

const Userlist = () => {

const [set,show]= useState(true)


  return (
    <div >
      <p>active {userlist.length}</p>
   {set == true?
  <div className=' row car '>
 
  {userlist.map((userdata)=>{

return <User name={userdata.name} email={userdata.email} img={userdata.img}/>
})}


</div>
   :
   <p></p>
   }

  <div>
    <div>
   
    </div>
  </div>
  <button onClick={()=>show(false)} className='btn btn-primary sty col-2'><b>Clear Data</b></button>
  <button onClick={()=>show(true)} className='btn btn-primary sty col-2'><b>show Data</b></button>
  </div>
  )
}

export default Userlist