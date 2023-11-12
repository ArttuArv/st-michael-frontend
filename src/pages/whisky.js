import React from 'react'
import WhiskyList from '../components/WhiskyList'

const Whisky = ( {whisky, beer} ) => {  

  window.scrollTo(0, 0);

  return (
    <WhiskyList whisky = {whisky} />
  )
}

export default Whisky