import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import './styles.css'

const slides = [
  require('../../assets/images/kuva1.png'),
  require('../../assets/images/kuva2.jpg'),
  require('../../assets/images/kuva3.png'),
  require('../../assets/images/kuva4.png'),  
  require('../../assets/images/kuva6.jpg'),
  require('../../assets/images/kuva7.jpg'),
  require('../../assets/images/kuva8.jpg'),
  require('../../assets/images/st-michael-tunnelmakuva.jpg'),
  require('../../assets/images/kuva5.jpg'),
]


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)  
 
  const goToPrevious = () => {
    setCurrentSlide(currentSlide => (currentSlide - 1 + slides.length) % slides.length);
  }

  const goToNext = () => {
    setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <div className="carousel">
        <div className="carousel__track-container">
          <ul className="carousel__track"> 
              <li className="carousel__slide">
                <img className='carousel__image' src={slides[currentSlide]}></img>
              </li>
          </ul>
        </div>

        <button className="carousel__button carousel__button--left" onClick={goToPrevious}>
          <FaArrowLeft className='arrow-symbol' />
        </button>

        <button className="carousel__button carousel__button--right" onClick={goToNext}>
          <FaArrowRight className='arrow-symbol' />
        </button>

        <div className="carousel__nav">
          {slides.map((slide, index) =>
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