import React from 'react'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import AllEvents from '../../components/AllEvents/AllEvents'

const EventList = () => {
  return (
    <div>
        <Header />
        <Filter />
        <AllEvents/>
    </div>
  )
}

export default EventList