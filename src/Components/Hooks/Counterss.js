import React, { useState } from 'react'
import './counterstyle.css'
const Counterss = () => {
    
let [count,setcount]=useState(0)

const countzero=()=>{
   
  
 
    return count=0 
  }
   


  return (
    <div className='sty'>
        {count==0?
              <h1>zero</h1>
            
            :
            <h1>{count}</h1>
        }
        
        <button onClick={()=>setcount(count+=1)} className='btn btn-outline-primary'>
+
        </button>
        <button onClick={()=>setcount(countzero())}  className='btn btn-outline-primary'>
Rest
        </button>
        <button onClick={()=>setcount(count-=1)}  className='btn btn-outline-primary'>
-
        </button>
    </div>
  )
}

export default Counterss