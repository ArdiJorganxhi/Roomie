import React from 'react';

import './LoginComponent.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import RegisterComponent from './RegisterComponent';

const LoginComponent = () => {
  return (
    <div className='login'>

      <form className='loginForm'>
        <div className='login-field'>


        <input type='text' className='login-username' placeholder='User Name'></input>
        <input type='passsword' className='login-username' placeholder='Password'></input>


        </div>

        <div className='rememberMe-forgetPassword'>

          <input type='checkbox' className='remember-me'></input>
          <p className='remText'>Remember Me</p>
          <a href='/register'> <p className='forgetText'>Forget Password</p> </a>

        </div>
        <div className='button-field'>


        <button className='login-button'>Login</button>


        </div>
      
       
      </form>


      
      <Routes>
        <Route path='/register'>
          <RegisterComponent />
        </Route>
      </Routes>
     
      
      
    </div>


  )
  
}

export default LoginComponent