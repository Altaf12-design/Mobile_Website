import React, { useState } from 'react'
import Userlist from '../Userayy'
import './Ab.css'
const Task14 = () => {

    const [person , setperson]=useState(Userlist)
    const [readmore, setreadmore] =useState('')
console.log(readmore)
// const data=' I thought it was a good feature because it makes everything on the website look more clean. So I would like to share an easy way to insert a show more/less button by using React- State Hook.'




const newUser=(id)=>{
   let newperson=person.filter((item)=>item.id != id)
   setperson(newperson)
}

const newUserparagraph=(id)=>{
 
 person.map((p)=>{
     if (p.id == id) {
      return setreadmore = false
     } else {
      return readmore = false
  
     }
 })

}



  return (

    <div className=''>
      <div>{person.length}</div>
        {person.map((item)=>{
            return(
            <div className='card st'>
                  <div><img src={item.img}/></div>
                  {readmore == true?  <p>When I read something on websites and saw a show more/less button React App component and add React, 
Create const showMore and setShowMore as follow:<a onClick={()=>newUserparagraph(item.id)} href="#">Show more</a></p>

:
<p>When I read something on websites and saw a show more/less button React App component and add React, 
Create const showMore and setShowMore as follow:............................  <a onClick={()=>newUserparagraph(item.id)} href="#">Show less</a></p>

}
                
            {item.name}
            {item.email}
            <button onClick={()=>{newUser(item.id)}} className='btn btn-success col-2'>Remove</button>
            </div>
            )
        })}
    </div>
  )
}

export default Task14