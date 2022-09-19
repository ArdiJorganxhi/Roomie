import './ProfileComponent.css'
import React, { useState } from 'react'
import Navbar from './Navbar'
import profile from '../images/profile-example.png'
import Popup from './Popup'
import useForm from './useForm'


const ProfileComponent = () => {

    const { handleChange, handleSubmit, handleGender, handleErrors, values, errors, isSubmitting } = useForm(
        
        
      );
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
     <Navbar /> 

     <div className='profile'>
        <div className='profile-image-container'>

        <img src={profile} className='profile-image'></img>
        <h3 className='name-surname'>Name Surname</h3>
        



        </div>


        <div className='profile-details-container'>
        <div className='profile-wrapper'>

        <h3>Username: </h3>
        <p>ardijorganxhi</p>


        </div>
        <div className='profile-wrapper'>

        <h3>Email Address: </h3>
        <p>ardijorganxhiu@gmail.com</p>


        </div>

        <div className='profile-wrapper'>

        <h3>Gender: </h3>
        <p>Male</p>


        </div>


        <div className='profile-wrapper'>

        <h3>Password: </h3>
        <p className='profile-password'>Ardi123!</p>


        </div>
     
            
        </div>


        
        <div className='update-button-container'>

            <button className='update-button' onClick={() => setButtonPopup(true)}>Bilgilerimi Güncelle</button>

        </div>

        <Popup trigger={buttonPopup}>
            <div className='update-form-container'>

            
           <form className='update-form'>
            
            <input type='text' className='update-fill' placeholder='Username' />
            <input type='email' className='update-fill' placeholder='Email Address' />
            <input type='text' className='update-fill' placeholder='Name' />
            <input type='text' className='update-fill' placeholder='Gender' />
            <input type='text' className='update-fill' placeholder='Surname' />
            <input type='password' className='update-fill' placeholder='Password' />

           <div className='update-button-field'>
            <button className='update-popup-button'>Güncelle</button>
            </div>
           </form>

           </div>

        </Popup>

           
        <div className='advert-button-container'>

            <button className='advert-button'>Yayınladıgın ilanlara göz at</button>

        </div>


     </div>
    </>
  )
}

export default ProfileComponent
