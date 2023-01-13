import { width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Project01.css'
import Datas from './Data'
const Project01 = () => {
    const [Data , setData]=useState(Datas)
    const [RemData , setRemData]=useState([])
    let combany = [...new Set (Data.map((e)=>{return e.mobcompany}))];
    let colors = [...new Set (Data.map((e)=>{return e.mobcolor}))];
    let Mmodel = [...new Set (Data.map((e)=>{return e.mobmodel}))];


    // const uniqueItems = Array.from(new Set(Data.map(item => item.mobcolor)));


const newData=(modal)=>{

    let newDatas=Data.filter((item)=>item.mobmodel == modal || item.mobcolor == modal || item.mobcompany == modal)
    setRemData(newDatas)
 }
const ShowAllData=()=>{
    setRemData(Data)
}
  return (
    <div className='d-flex row'>
        
        <div className='col-md-4 col-xs-2 col-sm-2 d-grid gap-2'>

        <div className='p-4 bg-dark'>
           <button onClick={()=>ShowAllData()} className='btn btn-primary allbutton '><b>Show All</b></button>
        <h4 className='ptage'>Colors</h4>
   
        {colors.map((item)=>{
            return(
               
                <button onClick={()=>newData(item)} style={{backgroundColor:item,marginLeft: '10px',marginBottom: '10px',width:'150px',color:'brown'}} className='btn bbw '>Click here</button>
           )})}
    
      
        <h4 className='ptage'>Modals</h4>
        {Mmodel.map((item)=>{
            return(
               
            <button onClick={()=>newData(item)} style={{marginLeft: '10px',marginBottom: '10px',width:'150px',}} className='btn btn-primary bw '>{item}</button>
           )})}
        
        
        <h4 className='ptage'>Company</h4>
        {combany.map((item)=>{
            return(

            <button onClick={()=>newData(item)} style={{marginLeft: '10px',marginBottom: '10px',width:'150px',}} className='btn btn-success bw'>{item}</button>
           )})}
    
        </div>
        </div>
        <div className='row d-flex col-lg-8 col-md-8'>
            {RemData == ''?
            <div className='Nothingdiv'>
                   <p className='Nothing'>Filter Your Own Choice....</p>
            </div>
          
            
            :
            RemData.map((item)=>{
                return(
                     <div style={{width:'26%',height:'430px',marginLeft:'30px',marginTop:'50px',backgroundColor:'#ffb3b3',borderRadius:'10px'}}>
                     <img style={{width:'100%',height:'250px',marginTop:'20px'}} src={item.imagemob} class="img-fluid rounded-start" />
                     <div style={{marginLeft:'10px',marginTop:'10px'}}>
                     <h5>{item.mobcompany}</h5>
                    <p style={{color:'green'}}><b>{item.mobprice}/-Rs</b></p>
                    <p><b>Mobile Model {item.mobmodel}</b></p>
                    <p><b>Mobile Color {item.mobcolor}</b></p>
                     </div>
                     
                    </div>
            )})
           }
            
           
        </div>
        </div>
    
  )
}

export default Project01