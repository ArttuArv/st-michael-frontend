import React, { useState } from "react";
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import { Link as LinkRouter } from 'react-router-dom';

import './styles.css'


const ImageLinkCarousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0)  
 
  const goToPrevious = () => {
    setCurrentSlide(currentSlide => (currentSlide - 1 + slides.length) % slides.length);
  }

  const goToNext = () => {
    setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
  }

  const slideBackgroundImageStyle = {
    backgroundImage: `url(${slides[currentSlide].background})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid #F5BD30',
  }

  const hrefStyles = {
    textDecoration: 'none',
    color: 'white',
  }

  const linkH2Styles = {
    fontWeight: '800',
    fontSize: '30px',
    textAlign: 'center',
    padding: '10px',
    color: '#F5BD30',
    userSelect: 'none',
    textShadow: '4px 4px 3px rgba(0, 0, 0, 0.8)',
  }


  return (
    <>
      <div className="carousel">
        <div className="carousel__track-container">
          <ul className="carousel__track"> 
              <li className="carousel__slide">
                <div key={slides[currentSlide].id} style={slideBackgroundImageStyle}>
                  <LinkRouter style = {hrefStyles} to={slides[currentSlide].to}>
                    <h2 style={linkH2Styles}>{slides[currentSlide].header}</h2>
                  </LinkRouter>
                </div>
              </li>
          </ul>
        </div>

        <button className="carousel__button carousel__button--left" onClick={goToPrevious}>
          <AiFillCaretLeft className='arrow-symbol' />
        </button>

        <button className="carousel__button carousel__button--right" onClick={goToNext}>
          <AiFillCaretRight className='arrow-symbol' />
        </button>
      </div>
    </>
  );
};

export default ImageLinkCarousel;