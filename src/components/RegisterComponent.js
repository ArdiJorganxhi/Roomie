import React from 'react';

import './RegisterComponent.css';

import { Link } from 'react-router-dom';

const RegisterComponent = () => {
  return (
    <div className='register'>

      <form className='registerForm'>
        <div className='register-field'>


        <input type='text' className='register-fill text' placeholder='Username'></input>
        <input type='text' className='register-fill text' placeholder='Name'></input>
        <input type='text' className='register-fill text' placeholder='Surname'></input>
        <input type='text' className='register-fill text' placeholder='Date Of Birth'></input>
        <input type='email' className='register-fill text' placeholder='Email'></input>
        <input type='password' className='register-fill text' placeholder='Password'></input>
        <input type='password' className='register-fill text' placeholder='Re-enter Password'></input>



        </div>


        <div className='button-field'>

<Link to='/login'>


<button className='register-button' >Register</button>

</Link>



</div>

      
      
       
      </form>

     
      
      
    </div>
  )
}

export default RegisterComponent