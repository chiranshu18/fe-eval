import React from 'react'
import './engagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeRequest from '../../utils/makeRequest/index'
import { UPDATE_EVENT_BOOKMARK } from '../../constants/apiEndPoints';

import {
    faCircleCheck,
    faBookmark,
    faCircleXmark
  } from '@fortawesome/free-solid-svg-icons';
  
  import {

    } from '@fortawesome/free-regular-svg-icons';

const Engagement = ({isBookmarked, isRegistered, areSeatsAvailable, id}) => {

    const [bookmark, setBookmark] = React.useState(isBookmarked);
    const [registered, setRegistered] = React.useState(isRegistered);
    const [seatsAvailable, setSeatsAvailable] = React.useState(areSeatsAvailable);

    const changeBookmark = async () => {
        setBookmark(!bookmark);
        await makeRequest(UPDATE_EVENT_BOOKMARK(id), {
        data: {isBookmarked: !bookmark},
    })
        console.log('avcdvcdghcvdvcbn')
      }

  return (
    
    <div className='status'>

            { registered && 
                <div className='status-data'> 
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} /> 
                    <p>REGISTERED</p> 
                </div> 
            }

            
            { !seatsAvailable && 
                <div className='status-data2'> 
                    <FontAwesomeIcon className='icon' icon={faCircleXmark} /> 
                    <p>NO SEATS AVAILABLE</p> 
                </div> 
            }

            {!registered &&  areSeatsAvailable && 
                <div className='status-data3'> 
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} /> 
                    <p>REGISTERED</p> 
                </div> 
            }


        <div className='is-bookmarked'>

            { bookmark && <FontAwesomeIcon className='icon' onClick={changeBookmark} icon={faBookmark} /> }
            { !bookmark && <FontAwesomeIcon className='icon2' onClick={changeBookmark} icon={faBookmark} /> }

        </div>

    </div>
  )
}

export default Engagement