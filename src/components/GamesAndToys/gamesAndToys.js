import React from 'react'
import styled from 'styled-components'

const gamesImage = require('../../assets/images/stmichael_pelit.png')

const gamesAndToys = () => {
  return (
    <>
      <GamesContainer>
        <GamesSectionWrapper>
          <GamesPictureWrapper>
            <GamesImage src={gamesImage} alt="games" />
          </GamesPictureWrapper>
          <GamesTextWrapper>
            <GamesText>
              <GamesTextHeader>
                PELEJÄ MONEEN MAKUUN
              </GamesTextHeader>
              <GamesTextParagraphItalic>
                Lautapelit ovat keskustelun jatkamista toisin keinoin
              </GamesTextParagraphItalic>
              <GamesTextParagraph>
                - tuntematon
              </GamesTextParagraph>
            </GamesText>
          </GamesTextWrapper>
        </GamesSectionWrapper>
      </GamesContainer>
    </>
  )
}

export default gamesAndToys

const GamesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: hsl(207, 19%, 9%); // #06260F;
  border-top: 3px solid #F5BD30; // #D4A24E;


  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

`

const GamesSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 1700px;
  padding: 10px;


  @media screen and (max-width: 800px) {
    flex-direction: column; //column-reverse;

  }

`

const GamesPictureWrapper = styled.section`
  width: 100%;
  max-height: 600px;
  min-width: 500px;
  // overflow: hidden;
  padding: 10px;
`

const GamesImage = styled.img`
  width: 100%;
  height: 100%;
  // min-width: 500px;
  object-fit: cover;
  border: 2px solid #F5BD30; // #D4A24E;
  border-radius: 10px;
`

const GamesTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;  
`

const GamesText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GamesTextHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #F5BD30; // #D4A24E;
  margin-bottom: 30px;
`

const GamesTextParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #F5BD30; // #D4A24E;
`
const GamesTextParagraphItalic = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #F5BD30; // #D4A24E;
  font-style: italic;
`
