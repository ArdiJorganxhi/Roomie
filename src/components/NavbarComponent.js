import React, {useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import profile from '../images/profile-example.png'
import useForm from './useForm'
import Popup from './Popup'
import CardPhoto from '../images/cardPhoto.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faNotebook } from '@fortawesome/sharp-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/sharp-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTrash } from 'react-icons/fa'
import BookmarkPng from '../images/bookmark.png'
import { DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Dropdown } from 'react-bootstrap'

const Navbar = () => {


  const { handleAdvertChange, handleAdvertSubmit, advertValues, values, handleChange } = useForm(
   
        
    );
    const [createAdvertButtonPopup, setCreateAdvertButtonPopup] = useState(false);

    const [open, setOpen] = useState(false);


    const data =  require('../assets/data.json')
   

    const [city, setCity] = useState('')

    const [district, setDistrict] = useState('')

    const [neighbourhood, setNeighbourhood] = useState('')

    const [cityIndex, setCityIndex] = useState(1);

    const [districtIndex, setDistrictIndex] = useState(1);

    let cities = []
    let districts = []
    let neighbourhoods = []

    let tempElement = '';
    let tempIndex = 0;

    let cityCount = 0;
    let districtCount = 0;

    data.forEach(element => {
        
      if(cityCount == 0){
        cities.push(' ')
      }
     cities.push(element.name)
     cityCount++;
      
   });





    function DropdownItem(props){
      return(
        <li className='dropdownItem'>
          <FontAwesomeIcon icon={props.icon} className='dropdownIcon' />
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
   

    <div class="container">


      <div className='row'>
        <div className='col-sm-12'>
            <div className='createCloseButtonContainer'>

            
            <div className='createCloseButton' onClick={() => setCreateAdvertButtonPopup(false)}></div>
            </div>
        </div>
      </div>
  <div class="row">
    <div class="col-sm-6">
        <div className='createAdvertLeft'>
        <div className='createAdvertImages'>
          <img src={CardPhoto} />
          <img src={CardPhoto} />

          <div className='createAdvertVertical'></div>

       </div>
       
        </div>
        
    </div>
    <div class="col-sm-6">
      <form className='createAdvertInput'>
      <input type='text' placeholder='Title' />
      <input type='text' placeholder='City' />
      <input type='text' placeholder='District' />
      <input type='text' placeholder='Neighbourhood' />
      <input type='text' placeholder='Rooms' />
      <input type='text' placeholder='Floor Area' />
      <input type='text' placeholder='Price' />
      <input type='text' placeholder='Content' className='createAdvertContent' />
      

       
       



      
      </form>
    </div>
   
  </div>
</div>

<div className='row'>
  <div className='col-sm-12'>
    <div className='createAdvertButtonContainer'>
      <button className='createAdvertButton'>Create</button>
    </div>
  </div>
</div>
    


        </Popup>
      <div className='menuTrigger' onClick={() => setOpen(!open)}>

      <img src={profile} className='profile-photo'></img>

     
      </div>

      <div className={`dropdownMenu ${open? 'active' : 'inactive'}`}>
        <ul>
         
        <DropdownItem icon={faBookmark} text={'Saved Ads'} />
        <Link to='/myAdvert' style={{ color: '#000' }}>

<DropdownItem icon={faNotebook}  text={'My Ads'} />
</Link>
        <Link to='/profile' style={{ color: '#000' }}>

        <DropdownItem icon={faGear}  text={'Settings'} />

        </Link>

        <Link to='/login' style={{ color: '#000' }}>
        <DropdownItem icon={faPowerOff}  text={'Log Out'} /> 
        </Link>
     
        
        
      </ul>
      </div>
    </div>
   

  

    </header>
    </>
  )
}

export default Navbar
