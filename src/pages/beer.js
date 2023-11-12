import React from 'react'
import PropTypes from 'prop-types'
import BeerList from '../components/BeerList';

const Beer = ({ beer }) => {
  window.scrollTo(0, 0);

  return (
    <BeerList beer = {beer} />
  )
}

export default Beer

Beer.propTypes = {
  beer:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          style: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        })
      )
    })
  )
}
