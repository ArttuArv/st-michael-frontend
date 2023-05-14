import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import i18next from './utils/i18next'

import Home from './pages'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import './App.css'

import beerService from './services/beers'
import whiskyService from './services/whiskies'
import openingHoursService from './services/openinghours'

const WhiskyPage = lazy(() => import('./pages/whisky'))
const Login = lazy(() => import('./pages/login'))
const StoryPage = lazy(() => import('./pages/story'))
const BeerPage = lazy(() => import('./pages/beer'))

import { rearrangeBeerOrder } from './utils/utils'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [whisky, setWhisky] = useState([])
  const [beer, setBeer] = useState([])
  const [openingHours, setOpeningHours] = useState([])
  const [language, setLanguage] = useState('fi')

  const toggleLanguage = (event) => {
    i18next.changeLanguage(event.target.value)
    setLanguage(event.target.value)
  } 

  const toggle = () => {   
    setIsOpen(open => !open)
  }

  // Get all beers from db  
  useEffect(() => {
    beerService.getAll()
      .then(beers => {
        beers = rearrangeBeerOrder(beers)
        setBeer(beers);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  // Get all whiskies from db
  useEffect(() => {
    whiskyService.getAll()
      .then(whiskies => {
        setWhisky(whiskies)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Get all opening hours from db
  useEffect(() => {
    openingHoursService.getAll()
      .then(openingHours => {
        setOpeningHours(openingHours)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // screen size listerer for sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };

      window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <Sidebar toggle = {toggle} isOpen = {isOpen} toggleLang = {toggleLanguage} language = {language} isMobile = {isMobile}/>
        <Navbar toggle = {toggle} toggleLang = {toggleLanguage} language = {language}/>              
        <Routes>
          <Route path = '/' exact element = {
            <Home openingHours = {openingHours} beer = {beer}/>} 
          />
          <Route path = '/whisky' element = {
            <Suspense fallback = {<div>Loading...</div>}>
             <WhiskyPage whisky = {whisky} />
            </Suspense>} 
          />
          <Route path = '/beer' element = {
            <Suspense fallback = {<div>Loading...</div>}>
              <BeerPage beer = {beer} />
            </Suspense>} 
          />
          <Route path = '/story' element = {
            <Suspense fallback = {<div>Loading...</div>}>
              <StoryPage />
            </Suspense>} 
          />
          <Route path = '/login' element = {
            <Suspense fallback = {<div>Loading...</div>}>
              <Login />
            </Suspense>} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App