        import { TextField } from '@mui/material'
        import React, { useState } from 'react'

        const Validationform = () => {

        // const [name,setname] = useState('')
        // const [email,seteamil] = useState('')
        // const [password,setpassword] = useState('')
        const [Image,setImage] = useState('')
        const [Userdata,setUserdata] = useState({
            name:'',
            email:'',
            password:'',
            
        })

        const handleChange=(e)=>{
        
        let name=e.target.name
        let value=e.target.value
        setUserdata({...Userdata,[name]:value})
        }


            async function handleClick(e){
                let {name,email,password}=Userdata
                e.preventDefault()
                let responce= await fetch('https://bootcamp-9a97b-default-rtdb.firebaseio.com/altaf.json',
                
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application.json'
                    },
                    body:JSON.stringify({name,email,password,Image})
                })
            
                    if (responce) {
                        alert('submit')
                    } else {
                        alert('error')
                    }
            }




        return (
            <div className='container'>
          
                <div className='row'>
                <form onSubmit={handleClick} className='form-content' style={{width:'30%',marginLeft:'auto',marginRight:'auto',marginTop:'50px'}}>
                <div className="form-floating mb-3">
            
        
        <div className="col-md-12">
                
        <label for="validationServer01" className="form-label"></label>
        <input type="text" name='name' value={Userdata.name} onChange={handleChange} maxLength={5} placeholder="username" class="form-control" id="validationServer01" required/>
        <div className="valid-feedback">
            
        </div>


        
        </div>
        </div>


        <div className="form-floating mb-3">

            
            <input onChange={handleChange} name='email' value={Userdata.email}   className="form-control" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div> 





        <div className="form-floating mb-3">
        <input onChange={handleChange}  value={Userdata.password} name='password'  type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
        </div>

        {/* {password == cpassword? */}

        {/* <div class="form-floating">
        <input value={cpassword} onChange={(e)=>setcpassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Confrom password</label>
        <p style={{color:'green'}}>correct!</p>
        </div> */}

        {/* 
        <div class="form-floating">
        <input value={cpassword} onChange={(e)=>setcpassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Confrom password</label>
        <p style={{color:'red'}}>invaild</p>
        </div> */}



        <div className="mb-3">
        <input onChange={(e)=>setImage(e.target.value[0])}  type="file" className="form-control"/>

        </div>
        <div style={{marginTop:'50px',marginLeft:'150px'}}>
        <button type='submit' className='btn btn-danger'>SUBMIT</button>
        </div>

        </form>
                </div>
            
            </div>
        )
        }

        export default Validationform