import React, {useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import profile from '../images/profile-example.png'
import useForm from './useForm'
import Popup from './Popup'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faNotebook } from '@fortawesome/sharp-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FaPowerOff } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTrash } from 'react-icons/fa'
import BookmarkPng from '../images/bookmark.png'

const Navbar = () => {


  const { handleAdvertChange, handleAdvertSubmit, advertValues, values, handleChange } = useForm(
   
        
    );
    const [createAdvertButtonPopup, setCreateAdvertButtonPopup] = useState(false);

    const [open, setOpen] = useState(false);


    function DropdownItem(props){
      return(
        <li className='dropdownItem'>

          <img src={props.img}></img>
          <a>{props.text}</a>

        </li>
      );
    }

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
    <button className='create-ad' onClick={() => setCreateAdvertButtonPopup(true)}>Create an advert</button>
    <Popup trigger={createAdvertButtonPopup}>
    <form className='createAdvert' onSubmit={handleAdvertSubmit} noValidate>

    <div class="row">
  <div class="col-sm-6">

    <div className='emptyImageSquare'>Fotoğraf sürükle veya yükle</div>

    <div className='row'>
      <div className='col-sm'>
      <div className='emptyShortImageSquare'>
      <p>Hello World</p>
    </div>
    
      </div>
      <div className='col-sm'>
      <div className='emptyShortImageSquare'>
      <p>Hello World</p>
    </div>
    
      </div>
      <div className='col-sm'>
      <div className='emptyShortImageSquare'>
      <p>Hello World</p>
    </div>
    
      </div>
    </div>
   



  </div>
  <div class="col-sm-6">
    <input type='text' value={advertValues.title} onChange={handleAdvertChange}  className='advertFill' placeholder='Ilan başlığı ekle' name='title' />
    <input type='text' className='advertFill' placeholder='Il' value={advertValues.city} onChange={handleAdvertChange} name='city'  />
    <input type='text' className='advertFill' placeholder='Ilçe' value={advertValues.district} onChange={handleAdvertChange} name='district'  />
    <input type='text' className='advertFill' placeholder='Mahalle' value={advertValues.neighbourhood} onChange={handleAdvertChange} name='neighbourhood'  />
    <input type='text' className='advertFill' placeholder='Oda sayısı' value={advertValues.rooms} onChange={handleAdvertChange} name='rooms'  />
    <input type='text' className='advertFill' placeholder='m2' value={advertValues.floorArea} onChange={handleAdvertChange} name='floorArea'  />
    <input type='number' className='advertFill' placeholder='Fiyat' value={advertValues.price} onChange={handleAdvertChange} name='price'  />
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <input type='text' className='advertDescription' placeholder='Açıklama ekle' value={advertValues.content} onChange={handleAdvertChange} />
  </div>
  
</div>


<div className='row'>
  <div className='col-sm-12'>

    <div className='advertUpdateButtonField'>
      <button className='advertUpdateButton' onClick={handleAdvertSubmit}>Update</button>
      
      
    </div>
  </div>
</div>


    </form>
 


        </Popup>
      <div className='menuTrigger' onClick={() => setOpen(!open)}>

      <img src={profile} className='profile-photo'></img>

     
      </div>

      <div className={`dropdownMenu ${open? 'active' : 'inactive'}`}>
        <ul>
         
        <DropdownItem img={<FontAwesomeIcon icon={faBookmark} />}  text={'Saved Ads'} />
        <Link to='/myAdvert'>

<DropdownItem img={<FontAwesomeIcon icon={faNotebook} />}  text={'My Ads'} />
</Link>
        <Link to='/profile'>

        <DropdownItem img={<FontAwesomeIcon icon={faGear} />}  text={'Settings'} />

        </Link>

        <Link to='/login'>
        <DropdownItem img={<FontAwesomeIcon icon={FaPowerOff} />}  text={'Log Out'} /> 
        </Link>
     
        
        
      </ul>
      </div>
    </div>
   

  

    </header>
    </>
  )
}

export default Navbar
