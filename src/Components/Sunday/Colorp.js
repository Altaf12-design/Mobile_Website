import React, { useState } from 'react'

const Colorp = () => {

    const [col,setcol] = useState('')
  return (
    <div style={{width:'100%',height:'600px',backgroundColor:'red'}}>

        <div style={{width:'50%',height:'300px',backgroundColor:'white'}}>
            
            <p>1</p>
        </div>
    </div>
  )
}

export default Colorp