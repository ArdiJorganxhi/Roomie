import './ProfileComponent.css'
import React, { useState } from 'react'
import Navbar from './NavbarComponent'
import profile from '../images/profile-example.png'
import Popup from './Popup'

import {Link} from 'react-router-dom'
import useForm from './useForm'


const ProfileComponent = () => {
  const { handleChange, values } = useForm(
   
        
    );
    const [updateButtonPopup, setUpdateButtonPopup] = useState(false);
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
        <p>{localStorage.getItem("name")}</p>


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

            <button className='update-button' onClick={() => setUpdateButtonPopup(true)}>Bilgilerimi Güncelle</button>

        </div>

        <Popup trigger={updateButtonPopup}>
            <div className='updateFormContainer'>

            
           <form className='updateForm'>
            
            <input type='text' className='updateFill' placeholder='Username' />
            <input type='email' className='updateFill' placeholder='Email Address' />
            <input type='text' className='updateFill' placeholder='Name' />
            <input type='text' className='updateFill' placeholder='Gender' />
            <input type='text' className='updateFill' placeholder='Surname' />
            <input type='password' className='updateFill' placeholder='Password' />

           <div className='updateButtonField'>
            <button className='updatePopupButton'>Güncelle</button>
            <button className='cancelPopupButton'>Iptal et</button>
            </div>
           </form>

           </div>

        </Popup>


        <Link to = '/myAdvert'>
           
        <div className='advert-button-container'>

            <button className='advert-button'>Yayınladıgın ilanlara göz at</button>

        </div>

        </Link>

        


     </div>
    </>
  )
}

export default ProfileComponent
