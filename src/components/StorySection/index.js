import React, { useState } from 'react'
import {text1, text2, text3} from '../../assets/text/story.js';
import textFile from '../../assets/text/story.txt';
import { StoryPageColumn2spanColumn, StoryPageColumn2SpanRow, StoryPageContainer, StoryPageGridWrapper, StoryPageImage, StoryPageImageWrapper, StoryPageTextWrapper } from './StorySectionElements.js';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#353535',
  fontSize: '3rem',
  color: '#fff',
  boxShadow: 'rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem',
  height: '100%',
  width: '100%',
  borderRadius: '4px',
  transition: 'all 500ms',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  // backgroundImage: `url(${images.kuva5})`,
  // border: '1px solid gold',

  hover: [
      {
          boxShadow: 'rgba(2, 8, 20, 0.1) 0px 0.35rem 1.175rem, rgba(2, 8, 20, 0.08) 0px 0.175rem 0.5rem',
          transform: 'translateY(-3px) scale(1.1)',
      },
  ],
}



const images = [
  '../../assets/images/kuva1.png',
  '../../assets/images/kuva2.png',
  '../../assets/images/kuva3.png',
  '../../assets/images/kuva4.png',
]

const Story = () => {
  const [text, setText] = useState();

  const getText = () => {
    fetch(textFile)
      .then(response => response.text())
      .then((textContent) => {
        setText(textContent);
      });
    return text || 'Loading...';
  }

  return (
    <StoryPageContainer>    
        <StoryPageGridWrapper>
          {/* <StoryPageTextWrapper>1
            <div style = {{ backgroundColor: 'purple', width: '800px', height: '800px'}}>
              text1
            </div>            
          </StoryPageTextWrapper> */}
          <StoryPageColumn2SpanRow>           
            {/* {images.map((image, index) => (<StoryPageImageWrapper key = {index} style = {{backgroundImage: `url(${image})`}}> */}
            <StoryPageImageWrapper>
              {images.map((image, index) => (              
                <StoryPageImage key = {index} src = {image} />                 
              ))}
            </StoryPageImageWrapper> 
          </StoryPageColumn2SpanRow>
            <StoryPageTextWrapper>
              <h1 style = {{ fontWeight: '400', fontSize: '3rem'}}>Tarinan otsikko</h1>
              <p style = {{ textAlign: 'justify' }}>{getText()}</p>
            </StoryPageTextWrapper>
          <StoryPageColumn2spanColumn>
          </StoryPageColumn2spanColumn>
        </StoryPageGridWrapper>
    </StoryPageContainer>
  )
}

export default Story;