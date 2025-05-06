import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopTherapists from '../components/TopTherapists'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header />  
        <SpecialityMenu />     
        <TopTherapists/>     
        <Banner/>                                          
    </div>
  )
}

export default Home