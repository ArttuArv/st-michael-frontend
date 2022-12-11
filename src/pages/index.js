import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlidingPictures from '../components/SlidingPictures'
import SportsSection from '../components/SportsSection'


const Home = ({ openingHours }) => {

  window.scrollTo(0, 0);

  return (
    <>
      <HeroSection openingHours = {openingHours} />
      <SlidingPictures />
      <SportsSection />
      <Footer openingHours = {openingHours} />
    </>
  )
}

export default Home