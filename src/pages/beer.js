import React from 'react'
import BeerList from '../components/BeerList';

const Beer = ({ beer }) => {
  window.scrollTo(0, 0);

  return (
    <BeerList beer = {beer} />
  )
}

export default Beer