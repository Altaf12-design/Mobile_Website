import { width } from '@mui/system'
import React, { useState } from 'react'

const Task12 = () => {

const [show, setshow]=useState(true)

  return (
    <div>
    {show == true?
     
      <p>*</p>
    
     :
     
    <p>))</p>
    
    }
    
    


     


      {show==true?
       <p className='bg'>
      The history of timekeeping devices dates back to ancient civilizations observing 
        astronomical bodies. Sundials and water clocks originated in ancient Egypt, while 
        incense clocks were used in China. Mechanical clocks were developed in medieval 
        Europe after the invention of the bell-striking alarm; Henry de Vick built a 
        mechanical clock around 1360 that was the basis for improvements in timekeeping 
        for the next 300 years. The mainspring, invented in the 15th century, allowed small 
        clocks to be built. Leonardo da Vinci produced the earliest drawings of a pendulum. 
        The pendulum clock, designed by Christiaan Huygens in 1656, was more accurate than 
        other mechanical timekeepers.
         
              
        </p>
      
      
      :
      <p >
         The history of timekeeping devices dates back to ancient civilizations observing 
        astronomical bodies. Sundials and water clocks originated in ancient Egypt, while 
        incense clocks were used in China. Mechanical clocks were developed in medieval 
        Europe after the invention of the bell-striking alarm; Henry de Vick built a 
        mechanical clock around 1360 that was the basis for improvements in timekeeping 
        for the next 300 years. The mainspring, invented in the 15th century, allowed small 
        clocks to be built. Leonardo da Vinci produced the earliest drawings of a pendulum. 
        The pendulum clock, designed by Christiaan Huygens in 1656, was more accurate than 
        other mechanical timekeepers.
      </p>
      
      
      }
      {show==false?
                 <button onClick={()=>setshow(true)} className='btn btn-primary'>Dark Mod</button>
                 
                 :
                 <button onClick={()=>setshow(false)} className='btn btn-primary'>Hide Drak mod</button>
      }
               
    </div>
  )
}

export default Task12