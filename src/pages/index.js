import React from 'react'
import PropTypes from 'prop-types'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlidingPictures from '../components/SlidingPictures'
import Events from '../components/SportsSection'
import FrontPageProductMenu from '../components/FrontpageProductMenu'
import GamesAndToys from '../components/GamesAndToys/gamesAndToys'
import WhiskyFrontpageAdd from '../components/WhiskyFrontpageAdd/whiskyFrontpageAdd'


const Home = ({ openingHours }) => {

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

Home.propTypes = {
  openingHours:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      day: PropTypes.string.isRequired,
      openinghours: PropTypes.string.isRequired,
    })
  )
}