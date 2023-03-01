import React from 'react'
import './filter.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
  faCircleDot,

} from '@fortawesome/free-solid-svg-icons';

import {
    faCircle,
  } from '@fortawesome/free-regular-svg-icons';

const Filter = () => {
  return (

    <div className='container'>
        
        
        <div className='filter-div'>

            <div className='filter'>
                <FontAwesomeIcon className='icon' icon={faFilter} />
                <h2>FILTER</h2>
                <FontAwesomeIcon className='icon' icon={faChevronUp} />
            </div>
            <div className='all'>
                <FontAwesomeIcon className='icon' icon={faCircleDot} />
                <h3>ALL</h3>
            </div>
            <div className='registered'>
                <FontAwesomeIcon className='icon' icon={faCircle} />
                <h3>REGISTERED</h3> 
            </div>

        </div>

        <div className='search-div'>

            <div className='search-bar'>
                <input className='input-box' type="text" placeholder='EVENT NAME'/>
                <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
            </div>


            <div className='bookmark'>
                <h3>BOOKMARKED</h3>
                <Link to='../Bookmarked'> <i> <FontAwesomeIcon className='icon' icon={faCircle} /> </i> </Link> 
            </div>


            <div className='seats'>
                <h3>SEATS AVAILABLE</h3> 
                <i> <FontAwesomeIcon className='icon' icon={faCircle} /> </i>
            </div>

        </div>


    </div>

  )
}

export default Filter