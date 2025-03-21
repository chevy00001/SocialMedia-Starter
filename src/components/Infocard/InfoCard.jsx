import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Profile</h4>
            <div>
                <UilPen width='1.2rem' height='1.2rem'/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
                <span>in relationship</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
                <span>Davao</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
                <span> Stark Industry</span>
            </span>
        </div>

        <button className='button logout-button'>Logout</button>

    </div>
  )
}

export default InfoCard