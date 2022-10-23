import './ProfileComponent.css'
import React, { useState } from 'react'
import Navbar from './NavbarComponent'
import profile from '../images/profile-example.png'
import Popup from './Popup'

import {Link} from 'react-router-dom'
import useForm from './useForm'
import ProfilePhoto from '../images/profile-example.png'


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
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='updateProfileCloseButtonContainer' onClick={() => setUpdateButtonPopup(false)}>

                  <div className='updateProfileCloseButton'></div>

                  </div>
              
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='profilePhotoContainer'>
                  <img src={ProfilePhoto} className='profilePhoto' />
                  <p className='updateProfileNameAndSurname'>Name Surname</p>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <form className='updateProfileForm'>
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                    <input type='text' placeholder='Gender' />
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Password' />
                  </form>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='updateProfileButtonContainer'>
                    <button className='updateProfileConfirmButton'>Confirm</button>
                    <button className='updateProfileCancelButton'>Cancel</button>
                  </div>
                </div>
              </div>
            </div>

        </Popup>


 

        


     </div>
    </>
  )
}

export default ProfileComponent
