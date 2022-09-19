import './updatePopup.css'
import React from 'react'

function updatePopup (props) {
  return (props.trigger === true) ?  (
    <div className='popup'>
        <div className='popup-inner'>
       
        {props.children}
        </div>
      
    </div>
  ) : ""
}

export default updatePopup
