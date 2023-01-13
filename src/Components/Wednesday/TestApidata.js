import React, { useEffect, useState } from 'react'

const TestApidata = () => {

const [datas,sedatas]=useState('')


 async  function fetchApi ()
 {
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data= await response.json();
    
   sedatas(data)
 
 }

 useEffect(()=>{
    fetchApi()

 },[])



  return (
    <div>
     { 
         datas.map((i)=>{
            return(
              <div>
            <ul>
                <li>
                  {i.title}
                </li>
               
            </ul>
            </div>
            )
         })
     } 
    
     
    </div>
  )
}

export default TestApidata