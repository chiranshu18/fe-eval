import React from 'react'
import './allEvents.css'

import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest'
import EventCard from '../EventCard/EventCard'

const AllEvents = () => {

    const [eventData, setEventData] = React.useState();
    const [error, setError] = React.useState();

    React.useEffect(() => {
        makeRequest(GET_ALL_EVENTS)
        .then((response) => {
        setEventData(response)
        })
        .catch((e) => {
        setError(e.message)
        });
    }, []);

    if(error){
        return (
        <div >
            <p>{error}</p>
        </div>
        );
    }

  return eventData ? (

    <div className='all-events'>
        
        <div className='each-event'>

            {
                eventData.map( (item) => ( <EventCard key = {item.id} eventData = {item}/>) )
            }

        </div>
        
    </div>

  ) : (

    <div>
      <p>Loading...</p>
    </div>

  )
}

export default AllEvents