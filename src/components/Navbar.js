import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import profile from '../images/profile-example.png'

const Navbar = () => {
  return (
    <>
    <header>
    <h3 className='logo'>Logo</h3>

    <nav className='navbar'>
        <a href='/#'>NAV1</a>
        <a href='/#'>NAV2</a>
        <a href='/#'>NAV3</a>
        <a href='/#'>NAV4</a>
      
       
    </nav>


   
    <div className='profile-field'>
    <button className='create-ad'>Create an advert</button>
    <img src={profile} className='profile-photo'></img>
    </div>
   

   

    </header>
    </>
  )
}

export default Navbar
