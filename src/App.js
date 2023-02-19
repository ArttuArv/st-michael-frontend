import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
const SportsPage = lazy(() => import('./pages/sports'))
const BeerPage = lazy(() => import('./pages/beer'))


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [whisky, setWhisky] = useState([])
  const [beer, setBeer] = useState([])
  const [openingHours, setOpeningHours] = useState([])

  const toggle = () => {   
    setIsOpen(open => !open)
  }

  // Get all beers from db  
  useEffect(() => {
    beerService.getAll()
      .then(beers => {
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

  return (
    <>
      <Router>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <Routes>
          <Route path = '/' exact element = {<Home openingHours = {openingHours} beer = {beer} />} />
          <Route path = '/whisky' element = {
            <Suspense fallback = {<div>Loading...</div>}>
             <WhiskyPage whisky = {whisky} />
            </Suspense>} 
          />
          <Route path = '/beer' element = {
            <Suspense>
              <BeerPage beer = {beer} />
            </Suspense>} 
          />
          <Route path = '/sports' element = {
            <Suspense fallback = {<div>Loading...</div>}>
              <SportsPage />
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