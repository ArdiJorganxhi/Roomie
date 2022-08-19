import React from 'react';

import './LoginComponent.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import RegisterComponent from './RegisterComponent';

const LoginComponent = () => {
  return (
    <div className='login'>

      <form className='loginForm'>
        <div className='login-field'>


        <input type='text' className='login-username text' placeholder='User Name'></input>
        <input type='password' className='login-username text' placeholder='Password'></input>


        </div>

        <div className='rememberMe-forgetPassword'>

          <input type='checkbox' className='remember-me'></input>
          <p className='remText'>Remember Me</p>
          <a href='#'> <p className='forgetText'>Forget Password</p> </a>

        </div>
        <div className='button-field'>

        <Link to= '/homepage'>

        <button className='login-button'>Login</button>

        </Link>
   


        </div>

        <div className='create-account-field'>


        <a href='/register' className='create-account'>No account, create a new one!</a>


        </div>

       
      
       
      </form>


      
      
     
      
      
    </div>


  )
  
}

export default LoginComponent