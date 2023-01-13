import React, { useEffect, useState } from 'react'

const TestUseEffect = () => {

const [datas,sedatas]=useState('')
const [d,setd]=useState([])

 async  function fetchApi ()
 {
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data= await response.json();
    
   setd(data)
 
 }

 useEffect(()=>{
    fetchApi()
   
 },[])



  return (
    <div>
     { 
         d.map((i)=>{
            return(
            <ul>
                
                  {i.title}
                
               
            </ul>
            )
         })
     } 
    
    
    </div>
  )
}

export default TestUseEffect