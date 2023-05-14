import React, { useState, useEffect } from 'react'
import { text1, text2, text3 } from '../../assets/text/story.js';
import textFile from '../../assets/text/story.txt';
import ImageCarousel from '../ImageCarousel/imageCarousel.js';

// import styles.css
import './styles.css'

const images = [
  require('../../assets/images/kuva1.png'),
  require('../../assets/images/kuva2.jpg'),
  require('../../assets/images/kuva3.png'),
  require('../../assets/images/kuva4.png'),  
  require('../../assets/images/michael_urquel.png'),
  require('../../assets/images/kuva7.jpg'),
  require('../../assets/images/michael_hoegaarden.png'),
  require('../../assets/images/st-michael-tunnelmakuva.jpg'),
  require('../../assets/images/kuva5.jpg'),
]


const Story = () => {
  const [text, setText] = useState();

  useEffect(() => {
    fetch(textFile)
      .then(response => response.text())
      .then((textContent) => {
        setText(textContent);
      })
      .catch((error) => {
        setText('...ladataan tekstiä')
      })
  }, [])
  

  return (
    <div className="story-page-container">
      <div className="story-page-flex">
        <section className='story-page-title'>
          <h2>Tarina</h2>
          <h3>Vasta alkaa..</h3>
        </section>
        <ImageCarousel images = {images} />
        <section className="story-page-grid">
          {images.map(image =>
            <img key={image} src={image}></img>
          )}
        </section>     
        {/* <h2>Tarinan otsikko</h2> 
        <section className='story-page-text'>
          <p>{text}</p>
          <p>{text2}</p>
        </section>           */}
      </div>
    </div>
  )
}

export default Story;