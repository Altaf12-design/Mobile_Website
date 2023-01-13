import React from 'react'
import Userlist from '../Userlist'
import Userdata from './Userdata'
const Task13 = () => {
    const userList=[
        {
            id:1,
            name:'Altaf',
            email:'@123',
            img:'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg'
        },
        
         
        {
            id:2,
            name:'Ali',
            email:'@1234556',
            img:'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg'
        }
        ,
        
         
        {
            id:3,
            name:'Ali',
            email:'@1234556',
            img:'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg'
        }
        ,
        
         
        {
            id:4,
            name:'Ali',
            email:'@1234556',
            img:'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg'
        }
        ]
  return (
    <div>
        
        <div>
            { userList.map((item)=>{
                return(
             
             <div>

              <div>{item.id} </div>
              
      
            <div>
                
             {item.name}
             </div>
             
             </div>
                )
            
            })
            
            
            }
        </div>
    </div>
  )
}

export default Task13