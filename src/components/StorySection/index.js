import React, { useState, useEffect } from 'react'
import { text1, text2, text3 } from '../../assets/text/story.js';
import textFile from '../../assets/text/story.txt';
import { StoryPageColumn2spanColumn, StoryPageColumn2SpanRow, StoryPageContainer, StoryPageGridWrapper, StoryPageImage, StoryPageImageWrapper, StoryPageTextWrapper } from './StorySectionElements.js';

// import styles.css
import './styles.css'

const images = [
  require('../../assets/images/kuva1.png'),
  require('../../assets/images/kuva2.jpg'),
  require('../../assets/images/kuva3.png'),
  require('../../assets/images/kuva4.png'),
  require('../../assets/images/kuva5.jpg'),
  require('../../assets/images/kuva6.jpg'),
  require('../../assets/images/kuva7.jpg'),
  require('../../assets/images/kuva8.jpg'),
  require('../../assets/images/st-michael-tunnelmakuva.jpg'),
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
    <>
      <div className="story-page-container">
        <div className="story-page-flex">
          <section className='story-page-title'>
            <h2>Tarinan otsikko</h2>
            <h3>{text3}</h3>
          </section>
          <div className="story-page-grid">
            <img className='image-grid-col-2' src={images[0]}></img>
            <img className='image-grid-row-2' src={images[1]}></img>
            <img src={images[2]}></img>
            <img src={images[3]}></img>
            <img src={images[4]}></img>
            <img src={images[5]}></img>
            <img className='image-grid-big' src={images[7]}></img>
            <img className='image-grid-big' src={images[8]}></img>
          </div>     
          <h2>Tarinan otsikko</h2> 
          <section className='story-page-text'>
            <p>{text}</p>
            <p>{text2}</p>
          </section>          
        </div>
      </div>
    </>
  )
}

export default Story;