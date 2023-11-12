import React from 'react'
import PropTypes from 'prop-types';
import WhiskyList from '../components/WhiskyList'


const Whisky = ({ whisky }) => {

  window.scrollTo(0, 0);

  return (
    <WhiskyList whisky = {whisky} />
  )
}

export default Whisky

Whisky.propTypes = {
  whisky: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      area: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          area: PropTypes.string.isRequired,
        })
      )
    })
  )
}