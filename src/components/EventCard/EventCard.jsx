import React from 'react'
import './eventCard.css'
import Engagement from '../Engagement/Engagement';

const EventCard = ({eventData}) => {


  return (

    <div className='card'>
        
        <div className='event-img-div'>
            <img className='event-img' src= {eventData.imgUrl} alt="event cover" />
        </div>

        <div className='event-name'>
            <h2>{eventData.name}</h2>
        </div>

        <div className='event-description'>
            <p>{eventData.description}</p>
        </div>

        <div className='event-venue'>
            <p>{eventData.venue}</p>
        </div>
            
        <div className='event-date'>
            <p>{eventData.datetime}</p>
        </div>


        <Engagement isBookmarked ={eventData.isBookmarked} isRegistered ={eventData.isRegistered} areSeatsAvailable = {eventData.areSeatsAvailable} id = {eventData.id}/>

    </div>

  )
}

export default EventCard