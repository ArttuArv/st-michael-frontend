import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlidingPictures from '../components/SlidingPictures'
import Events from '../components/SportsSection'
import FrontPageProductMenu from '../components/FrontpageProductMenu'
import GamesAndToys from '../components/GamesAndToys/gamesAndToys'
import WhiskyFrontpageAdd from '../components/WhiskyFrontpageAdd/whiskyFrontpageAdd'


const Home = ({ openingHours, beer }) => {

  // window.scrollTo(0, 0);

  return (
    <>
      <HeroSection openingHours = {openingHours} />      
      {/* <FrontPageProductMenu beer = {beer} /> */}
      <WhiskyFrontpageAdd />
      <Events />
      {/* <GamesAndToys /> */}
      {/* <SlidingPictures /> */}
      {/* <Footer openingHours = {openingHours} /> */}
    </>
  )
}

export default Home