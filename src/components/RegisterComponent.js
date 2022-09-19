import React, { useState, useEffect } from 'react';

import './RegisterComponent.css';

import Login from '../pages/Login';

import { Link, Route, Routes, BrowserRouter, Navigate, useNavigate, useHistory } from 'react-router-dom';
import Register from '../pages/Register';
import useForm from './useForm';
import validate from './validateInfo'
import Helmet from 'react-helmet'




const RegisterComponent = ({submitForm}) => {


  const { handleChange, handleSubmit, handleGender, handleErrors, values, errors, isSubmitting } = useForm(
    submitForm
    
  );
  
 
    

  const navigate = useNavigate();

  function handleValidation(){

    if(Object.keys(errors).length === 0 && isSubmitting){
      navigate("/login")
    }
    else{
      alert('Registration not completed')
    }
    
  }

  return (
    
    <div className='register'>
    
      <form className='registerForm' onSubmit={handleSubmit} onClick={handleErrors} noValidate>
        <div className='register-field'>

        
        <input type='text' className='register-fill text' name='username' placeholder='Username' value={values.username} onChange={handleChange}  />
        <div className='error'>
        {errors.username && <p className='error-line'>{errors.username}</p>}
        </div>
       
        <input type='text' className='register-fill text' name='name' placeholder='Name' value={values.name} onChange={handleChange}  />
        <div className='error'>
        {errors.name && <p className='error-line'>{errors.name}</p>}
        </div>
       
        <input type='text' className='register-fill text' name='surname' placeholder='Surname' value={values.surname} onChange={handleChange}  />
        <div className='error'>
        {errors.surname && <p className='error-line'>{errors.surname}</p>}
        </div>

        <select className='register-fill text'>
          <option value={values.gender = 'Male'} onChange={handleGender} className='register-fill text'>Male</option>
          <option value={values.gender = 'Female'} onChange={handleGender} className='register-fill text'>Female</option>
        </select>
       
        <input type='email' className='register-fill text' name='email' placeholder='Email' value={values.email} onChange={handleChange} />
        <div className='error'>
        {errors.email && <p className='error-line'>{errors.email}</p>}
        </div>
       
        <input type='password' className='register-fill text' name ='password' placeholder='Password' value={values.password} onChange={handleChange}  /> 
        <div className='error'>
        {errors.password && <p className='error-line'>{errors.password}</p>}
        </div>
       
       
   



        </div>


        <div className='button-field'>
        



        

          
        <button className='register-button' type='submit' onClick={handleValidation}>Register</button>

        





</div>

      
      
       
</form>

     
      
      
    </div>
  )
}

export default RegisterComponent