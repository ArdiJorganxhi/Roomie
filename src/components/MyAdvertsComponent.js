
import './MyAdvertsComponents.css'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import Navbar from './NavbarComponent'
import WhitePhoto from '../images/white-photo.png'

import axios from 'axios'

import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import CardPhoto from '../images/cardPhoto.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AdvertCard from './AdvertCard'
import useForm from './useForm'
import ExampleJSON from '../example.json'
import { baseUrl } from '../API/baseUrl'
import { faDollar, faDollarSign } from '@fortawesome/sharp-solid-svg-icons'
import { BottomScrollListener, useBottomScrollListener } from 'react-bottom-scroll-listener'
import getMap from '../utilities/GetMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { MultiSelect } from 'primereact'
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';









const MyAdvertsComponent = () => {


    const data =  require('../assets/data.json')
    const result = data;

    var cities = []
    var districts = []
    var neighbourhoods = []

    var functionCount = 0;
    var neighbourhoodCount = 0;

    const citySelectItems = [
      {label: '1+1', value: '1+1'},
      {label: '2+0', value: '2+0'},
      {label: '2+1', value: '2+1'},
      {label: '3+1', value: '3+1'},
      {label: '4+1', value: '4+1'}
  ];

  

    function SortDropdown(props){

      return(
        <li className='sortDropdownItem'>
          <FontAwesomeIcon icon={props.icon} className='sortDropdownIcon' />
          <a>{props.text}</a>
          
        </li>
        
      )
    }

    
      result.forEach(element => {
        
        if(functionCount == 0){
          cities.push(' ')
        }
       cities.push(element.name)
       functionCount++;
        
     });


     
  

   
    
   
    const [advertArray, setAdvertArray] = useState([])

    const {advertValuesExample, handleAdvertValuesChange, advertTitle } = useForm();

    const [alertOnBottom, setAlertOnButtom] = useState(true);

    const [pageNumber, setPageNumber] = useState(1);

    const [city, setCity] = useState('');
    
    const [district, setDistrict] = useState('');

    const [neighbourhood, setNeighbourhood] = useState('');

    const [selectedCityIndex, setSelectedCityIndex] = useState(1);

    const [selectedDistrictIndex, setSelectedDistrictIndex] = useState(1);

    const [openDropdown, setOpenDropdown] = useState(false);
    
    let sortValue = 'Date ASC'
    

    let count = pageNumber

    
    
    
   
    const handleOnDocumentBottom = () => {
      
      setPageNumber(count++)
      
    };

     var cityIndex = 0;
     let districtCount = 0;

      const ref = useRef();
   

 
   


 
    useEffect(() => {

      let values = {
        "city": "",
        "district":"",
        "neighbourhood":"",
        "rooms" : "",
        "minPrice": null,
        "maxPrice": null,
        "minFloorArea":null,
        "maxFloorArea":null,
        "Page": pageNumber,
        "PageSize": 3,
        "orderByWith" : "Price ASC",
        "applicationUserId": 2
      }

      axios.post('/api/Advert/filter', values, {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
      }).then(
        res => {
          let array1 = advertArray
          let array2 = res.data;
          setAdvertArray(array1.concat(array2))
     
          
        }
      ).catch(
        err => {
          console.log(err)
        }
      )

      console.log('Bottom')
      


      
    
        
    }, [city, district, sortValue, alertOnBottom])


   

    
  
    

    

    

    
  return (
    <div className='myAdvertsComponentContainer' onScroll={handleOnDocumentBottom}>
      
      <Navbar />

      



        <div className='pageContainer'>

        

   
  
    <div className='filterSection myAdvertPage'>

<aside>
<DropdownButton id="dropdown-basic-button" title='City'>


  <div className='dropdownHeight'>
 

  {
   cities.map((element, index) => {
    
    return(
      <Dropdown.Item className='dropdownItem' onClick={() => {setCity(element); setSelectedCityIndex(index); cityIndex = selectedCityIndex}}>
        {element}
      </Dropdown.Item>
    )

    

    
  })

  
}

</div>


</DropdownButton>



<DropdownButton id="dropdown-basic-button" title='District'>

 {
   

    data[selectedCityIndex - 1].towns.forEach(element => {

      
      districts.push(element.name);
      districtCount++;
      
    })
 }




<div className='dropdownHeight'>



 {
  districts.map((element, index) => {
    return(
      <Dropdown.Item onClick={() => {setSelectedDistrictIndex(index); setDistrict(element)}}>{element}</Dropdown.Item>
    )
  })
 }

</div>



</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Neighbourhood">

  {
    data[selectedCityIndex - 1].towns[selectedDistrictIndex].districts.forEach(element => {

      element.quarters.forEach(element1 => {

        if(neighbourhoodCount == 0){

          neighbourhoods.push(' ')
        }

        neighbourhoods.push(element1.name);
        neighbourhoodCount++;

      })
    })
  }

<div className='dropdownHeight'>


  {
    neighbourhoods.map((element) => {

      return(
        <Dropdown.Item>{element}</Dropdown.Item>
      )
    })
  }
  </div>

</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Price range">

  <div className='priceRangeContainer'>
  <input type='text' placeholder='Min' className='minMaxInput' />
  <br></br>
  <input type='text' placeholder='Max' className='minMaxInput' />
  </div>


</DropdownButton>



<MultiSelect  options={citySelectItems} />
 



<DropdownButton id="dropdown-basic-button" title="m2">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
</aside>

<div className='filterButtonField'>
<button className='filterButton'>Filtrele</button>
</div>


</div>

<div className='verticalLineSection'></div>

<div className='advertsBody'>



<div className='reviewAdsContainer'>

  <div className='reviewAds'>
  <h3>Ilanları incele</h3>
  <div className='reviewAdsLine'></div>
</div>


  <div className='sortContainer'>
    <button className='sort' onClick={() => setOpenDropdown(!openDropdown)}>Sort</button>
  </div>

  
  <ul className='cards' onChange={handleAdvertValuesChange} onScroll={handleOnDocumentBottom}>
  
     
      
  {advertArray.length != 0 && advertArray.map((obj) => {
        
        return <AdvertCard id={obj.advertId} price={obj.price} title={obj.title} city={obj.city} district={obj.district} neighbourhood={obj.neighbourhood} floorArea={obj.floorArea} rooms={obj.rooms}  />
        
     })}
     
    
    
   
     
    </ul>

    </div>
  
  
</div>



   
      <div className={`sortDropdownMenu ${openDropdown? 'active' : 'inactive'}`}>
        <ul>
         
          <SortDropdown icon={faDollarSign} text='(Ascending)' onClick={sortValue = 'Price ASC'}></SortDropdown>
          <SortDropdown icon={faDollarSign} text='(Descending)' onClick={sortValue = 'Price DESC'}></SortDropdown>
          <SortDropdown icon={faCalendarDays} text='(Ascending)' onClick={sortValue = 'Date ASC'}></SortDropdown>
          <SortDropdown icon={faCalendarDays} text='(Descending)' onClick={sortValue = 'Date DESC'}></SortDropdown>
     
        
        
      </ul>
      </div> 
    


    
      
    
    

      
<BottomScrollListener onBottom={handleOnDocumentBottom} />

    
        </div>

        </div>

      
     

     
     
       
  
   
  )
}

export default MyAdvertsComponent
