import React, { useEffect, useState } from 'react'
import './AdvertCard.css'

import Popup from './Popup.js'


import AdvertCardPicture from '../images/cardPhoto.webp'
import Profile from '../images/profile-example.png'
import { Bookmark } from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/sharp-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import ProfilePhoto from '../images/profile-example.png'
import { faGear } from '@fortawesome/sharp-solid-svg-icons'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Dropdown } from 'react-bootstrap'
import { faBookmark } from '@fortawesome/sharp-solid-svg-icons'
import { faPencil } from '@fortawesome/sharp-solid-svg-icons'
import { faX } from '@fortawesome/sharp-solid-svg-icons'
import useForm from './useForm'
import axios from 'axios'
import { baseUrl } from '../API/baseUrl'



const AdvertCard = (props) => {


  const { advertValuesExample, handleAdvertValuesChange, confirmChanges, advertTitle } = useForm();
  function DropdownItem(props){
    return(
      <li className='advertDropdownItem'>

        <img src={props.img}></img>
        <a>{props.text}</a>

      </li>
    );
  }

  const [tempAdvertValues, setTempAdvertValues] = useState({
    advertId: props.id,
    title: props.title,
    city: props.city,
    district: props.district,
    neighbourhood: props.neighbourhood,
    rooms: props.rooms,
    floorArea: props.floorArea,
    price: props.price,
    content: props.content
  })

  const handleTempAdvertValues = e => {

    setTempAdvertValues({
      ...tempAdvertValues,
      [e.target.name]: e.target.value
    })
  }

  let advertId = props.id


  const [advertPopup ,setAdvertPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateAdvertPopup, setUpdateAdvertPopup] = useState(false);

  
  const updateAdvertSubmit = e => {
    e.preventDefault();
    let token = localStorage.getItem('token')
    console.log(tempAdvertValues)
    axios.post(baseUrl + '/api/Advert', tempAdvertValues, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
      },      
  }).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }






  const deleteAdvert = e => {
    let token = localStorage.getItem('token')
      axios.delete(baseUrl + '/api/Advert/' + advertId, { headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
    },      }).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }

  axios.get(baseUrl + '/api/Advert/1').then(
    res => {
      console.log(res);
    }
  ).catch(
    err => {
      console.log(err)
    }
  )



  return (
    <div className='cardContainer'>
         <div href="" class="card">
          <div className='cardImage'>
          
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div className='menuTrigger' onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={faGear} className='settingsIcon' />
      </div>

      <div className={`advertSettings ${open? 'active' : 'inactive'}`}>
        <div className='optionItems'>
        <Dropdown.Item onClick={() => alert('Your advert has been saved successfully!')}>
          <div className='optionItem'>
            <FontAwesomeIcon icon={faBookmark} className='settingIcon' />
            <p>Save</p>
          </div>
        </Dropdown.Item>
<Dropdown.Item onClick={() => setUpdateAdvertPopup(!updateAdvertPopup)}>
<div className='optionItem'>
            <FontAwesomeIcon icon={faPencil} className='settingIcon' />
            <p>Update</p>
          </div>
</Dropdown.Item>
<Dropdown.Item onClick={deleteAdvert}>
<div className='optionItem'>
            <FontAwesomeIcon icon={faX} className='settingIcon' />
            <p>Delete</p>
          </div>
</Dropdown.Item>

        </div>

      </div>
          </div>
    
      <div class="card__overlay" onClick={() => console.log(props.id)}>

        
        <div class="card__header" onClick={() => setAdvertPopup(true)}>
                     
          
          <div class="card__header-text" >

          <div className='cardPrice'>
            <h3>{props.price} ₺ </h3>
          </div> 
         
            <h2 class="card__title">{props.title}</h2>            
            <span class="card__status">1 hour ago</span>
            
          </div>
        </div>
        <div class="card__description">
          <div className='cardInformations'>
          <FontAwesomeIcon icon={faLocationPin} className='icon' />
            <p className='informationDescription'>{props.city}</p>
          </div>
          <div className='cardInformations' >
          <FontAwesomeIcon icon={faLocationPin} className='icon' />
            <p className='informationDescription'>{props.district}</p>
          </div>
          <div className='cardInformations'>
          <FontAwesomeIcon icon={faRoad} className='icon' />
            <p className='informationDescription'>{props.neighbourhood}</p>
          </div>
          <div className='cardInformations'>
          <FontAwesomeIcon icon={faHouse} className='icon' />
            <p className='informationDescription'>{props.floorArea}</p>
          </div>
           <div className='cardInformations'>
           <FontAwesomeIcon icon={faDoorClosed} className='icon' />
            <p className='informationDescription'>{props.rooms}</p>
          </div>
        </div>
      </div>
    </div>   
     <Popup trigger={advertPopup} className='advertPopup'>
     <div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div className='imageContainer'>
        <img src='https://i.imgur.com/oYiTqum.jpg' />
      </div>
    </div>

    <div class="col-sm-6">
    <div className='closeButton' onClick={() => setAdvertPopup(false)}></div>
      <div className='advertContent'>
        <div className='profileImage'>
          <img src={ProfilePhoto} />
          <h4>username</h4>
          <button>Send message</button>
        </div>
        <hr></hr>
        <div className='advertInformations'>
          <h5>{props.title}</h5>
          <p>{props.content}</p>
        </div>
        <hr></hr>
        <div className='advertOtherInformations'>
          <div className='advertOtherInformation'>
          <FontAwesomeIcon icon={faLocationPin} className='advertOtherInformationIcon' />
            <p className='advertOtherInformationDescription'>{props.city}</p>
          </div>
          <div className='advertOtherInformation'>
          <FontAwesomeIcon icon={faLocationPin} className='advertOtherInformationIcon' />
            <p className='advertOtherInformationDescription'>{props.district}</p>
          </div>
          <div className='advertOtherInformation'>
          <FontAwesomeIcon icon={faRoad} className='advertOtherInformationIcon' />
            <p className='advertOtherInformationDescription'>{props.neighbourhood}</p>
          </div>
          <div className='advertOtherInformation'>
          <FontAwesomeIcon icon={faHouse} className='advertOtherInformationIcon' />
            <p className='advertOtherInformationDescription'>{props.floorArea}</p>
          </div>
          <div className='advertOtherInformation'>
          <FontAwesomeIcon icon={faDoorClosed} className='advertOtherInformationIcon' />
            <p className='advertOtherInformationDescription'>{props.rooms}</p>
          </div>
        </div>
      </div>
      <div className='advertPrice'>
        <h3 className='priceContainer'>Price</h3>
        <h3 className='price'>{props.price} ₺</h3>
      </div>
    </div>
  
  </div>
</div>
     </Popup>


     <Popup trigger={updateAdvertPopup}>
      <form className='updateAdvertForm'>
     <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div className='updateAdvertLeftContainer'>

      <div className='updateAdvertImageContainer'>
        <img src={AdvertCardPicture} />
        <img src={AdvertCardPicture} />
      </div>
      <div className='updateAdvertVerticalLine'></div>

      </div>
     
    </div>
   
    <div class="col-sm-8">
      <div className='updateAdvertInformations'>
      <input type='text' placeholder='Title' name='title' value={tempAdvertValues.advertId} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Title' name='title' value={tempAdvertValues.title} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='City' name='city' value={tempAdvertValues.city} onChange={handleTempAdvertValues} required/>
      <input type='text' placeholder='District' name='district' value={tempAdvertValues.district} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Neighbourhood' name='neighbourhood' value={tempAdvertValues.neighbourhood} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Floor Area' name='floorArea' value={tempAdvertValues.floorArea} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Rooms' name='rooms' value={tempAdvertValues.rooms} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Price' name='price' value={tempAdvertValues.price} onChange={handleTempAdvertValues} required />
      <input type='text' placeholder='Content' name='content' value={tempAdvertValues.content} className='updateAdvertValueContent' onChange={handleTempAdvertValues} required />

      </div>

    </div>

    <div className='row'>
      <div className='col-sm-12'>
        <div className='updateConfirmButtonContainer'>
        <button className='updateConfirmButton' onClick={updateAdvertSubmit}>Update</button>
        </div>
       
      </div>
    </div>
   
  </div>
</div>
</form>
     </Popup>
    </div>

  )
}

export default AdvertCard
