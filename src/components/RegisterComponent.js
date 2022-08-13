import React from 'react';

import './RegisterComponent.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

const RegisterComponent = () => {
  return (
    <div className='register'>

      <form className='registerForm'>
        <div className='register-field'>


        <input type='text' className='register-fill' placeholder='Username'></input>
        <input type='text' className='register-fill' placeholder='Name'></input>
        <input type='text' className='register-fill' placeholder='Surname'></input>
        <input type='text' className='register-fill' placeholder='Date Of Birth'></input>
        <input type='email' className='register-fill' placeholder='Email'></input>
        <input type='password' className='register-fill' placeholder='Password'></input>
        <input type='password' className='register-fill' placeholder='Re-enter Password'></input>



        </div>


        <div className='button-field'>


<button className='register-button' >Register</button>


</div>

      
      
       
      </form>

     
      
      
    </div>
  )
}

export default RegisterComponent