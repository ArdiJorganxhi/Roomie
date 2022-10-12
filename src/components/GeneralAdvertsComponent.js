import React, {useState} from 'react'
import './GeneralAdvertsComponents.css'
import Navbar from './NavbarComponent'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'


const GeneralAdvertsComponent = () => {

    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  return (
    <div>
      <Navbar />


      <div className='gridContainer'>

        <div className='filterSection'>
       

<DropdownButton id="dropdown-basic-button" title="İl">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="İlçe">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Mahalle">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Fiyat Aralığı">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Oda sayısı">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="m2">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<div className='filterButtonField'>
  <button className='filterButton'>Filtrele</button>
</div>
</div>
<div className='verticalLineSection'></div>

<div className='advertsContainer'>
  <h3 className='advertsTitle'>İlanlara göz at</h3>
  <hr></hr>
  
</div>
        </div>
      </div>
   
  )
}

export default GeneralAdvertsComponent
