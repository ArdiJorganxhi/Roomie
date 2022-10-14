import React from 'react'

import './AlertPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/sharp-solid-svg-icons'

const AlertPopup = () => {
  return (
    <div>

        <div className='alertPopupContainer'>
            <div className='iconBox'>
            <FontAwesomeIcon icon={faCheck} className='successIcon' />
            </div>

            <div className='alertText'>
                <h3>Done!</h3>
                <p>Your advert is successfully posted!</p>
            </div>
        </div>
      
    </div>
  )
}

export default AlertPopup
