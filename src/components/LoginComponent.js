import {useEffect, useState} from 'react';

import './LoginComponent.css';
import useForm from './useForm';





import { Link } from 'react-router-dom';



const LoginComponent = ({submitForm}) => {


  const { handleChange, handleSubmit, handleLoginSubmit, handleGender, handleValidation, handleErrors, values, errors, isSubmitting } = useForm(
    submitForm
    
  );
  return (

    <div className='login'>

      
 
      <form className='loginForm' onSubmit={handleLoginSubmit} onClick={handleErrors} noValidate>
        <div className='login-field'>


        <input type='email' value={values.email} onChange={handleChange} className='login-username text' name='email' placeholder='User Name' />
        <div className='error'>
        {errors.email && <p className='error-line'>{errors.email}</p>}
        </div>
        <input type='password' value={values.password} onChange={handleChange} className='login-username text' name='password' placeholder='Password' />
        <div className='error'>
        {errors.password && <p className='error-line'>{errors.password}</p>}
        </div>

        </div>

        <div className='rememberMe-forgetPassword'>

          <input type='checkbox' className='remember-me'></input>
          <p className='remText'>Remember Me</p>
          <a href='#'> <p className='forgetText'>Forget Password</p> </a>

        </div>
        <div className='button-field'>

       
        <Link to='/profile'>


        <button className='login-button' type='submit' onClick={handleValidation}>Login</button>


        </Link>
        

       
   


        </div>

        <div className='create-account-field'>

       
       


        </div>

       
      
       
      </form>


      
      
     
      
      
    </div>


  )
  
}

export default LoginComponent