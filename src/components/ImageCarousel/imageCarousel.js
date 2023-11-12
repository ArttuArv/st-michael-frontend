import { useState } from 'react'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'

import './styles.css'


const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)  
 
  const goToPrevious = () => {
    setCurrentSlide(currentSlide => (currentSlide - 1 + images.length) % images.length);
  }

  const goToNext = () => {
    setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const slideBackgroundImageStyle = {
    backgroundImage: `url(${images[currentSlide]})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
  }

  return (
    <>
      <div className="carousel">
        <div className="carousel__track-container">
          <ul className="carousel__track"> 
              <li className="carousel__slide">
                <div className="carousel__image" style={slideBackgroundImageStyle}></div>
                {/* <img className='carousel__image' src={slides[currentSlide]}></img> */}
              </li>
          </ul>
        </div>

        <button className="carousel__button carousel__button--left" onClick={goToPrevious}>
          <AiFillCaretLeft className='arrow-symbol' />
        </button>

        <button className="carousel__button carousel__button--right" onClick={goToNext}>
          <AiFillCaretRight className='arrow-symbol' />
        </button>

        <div className="carousel__nav">
          {images.map((slide, index) =>
            <button 
              className={`carousel__indicator ${currentSlide === index ? 'carousel__indicator--active' : ''}`}
              onClick={() => goToSlide(index)}
              key={slide}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ImageCarousel