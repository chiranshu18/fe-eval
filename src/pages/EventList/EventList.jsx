import React from 'react'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import AllEvents from '../../components/AllEvents/AllEvents'
import Footer from '../../components/Footer/Footer'

const EventList = () => {
  return (
    <div>
        <Header />
        <Filter />
        <AllEvents/>
        <Footer/>
    </div>
  )
}

export default EventList