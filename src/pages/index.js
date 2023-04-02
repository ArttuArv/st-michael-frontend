import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlidingPictures from '../components/SlidingPictures'
import SportsSection from '../components/SportsSection'
import FrontPageProductMenu from '../components/FrontpageProductMenu'
import GamesAndToys from '../components/GamesAndToys/gamesAndToys'


const Home = ({ openingHours, beer }) => {

  window.scrollTo(0, 0);

  return (
    <>
      <HeroSection openingHours = {openingHours} />      
      <FrontPageProductMenu beer = {beer} />
      <SportsSection />
      <GamesAndToys />
      <SlidingPictures />
      <Footer openingHours = {openingHours} />
    </>
  )
}

export default Home