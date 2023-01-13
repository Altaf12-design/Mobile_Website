import React from 'react'
import './pp.css'
import mobile from './mobile.webp'
import mob from './ist.jpg'
const practic = () => {
  return (
    <div className='row justify-content-center'>
      <div className='card col-4 '>
        <div className='br'>
        <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' className='mr'/>
        </div>
        <div className='p-2 needs-validation'>
        <h5>username</h5>
        <input type='email' placeholder="name@example.com" className='form-control' />
        <h5>Password</h5>
        <input type='password' placeholder="password" className='form-control'/>
        </div>
        <div class="row justify-content-center mt-3 mb-5">
          <div className='d-grid gap-2 col-md-6 col-sm-12'>
          <button type='submit' className='btn btn-primary bynstyle'>LOGIN</button>
        <button type='button' className='btn btn-primary'>SINGUP</button>
          </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default practic