import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const gamesImage = require('../../assets/images/stmichael_pelit.png')

const gamesAndToys = () => {
  const { t } = useTranslation()

  return (
    <GamesSectionWrapper>
      <GamesPictureWrapper>
        <GamesImage src={gamesImage} alt="games" />
      </GamesPictureWrapper>
      <GamesTextWrapper>
        <GamesText>
          <GamesTextHeader>
            {t('games.header')}
          </GamesTextHeader>
          <GamesTextParagraphItalic>
            {t('games.text')}
          </GamesTextParagraphItalic>
          <GamesTextParagraph>
            - {t('games.author')}
          </GamesTextParagraph>
        </GamesText>
      </GamesTextWrapper>
    </GamesSectionWrapper>
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
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
  border: 2px solid #F5BD30; // #D4A24E;
  border-radius: 30px;
  margin: 0 15px 0 0;
  background-color: hsl(207, 19%, 9%); // #06260F;

  @media screen and (max-width: 1586px) {
    min-width: 300px;
  }

  @media screen and (max-width: 1400px) {
    min-width: 250px;
  }

  @media screen and (max-width: 1330px) {
    flex-direction: row;
    margin: 15px 0 0 0;
  }

  @media screen and (max-width: 865px) {
    flex-direction: column;
  }
`

const GamesPictureWrapper = styled.section`
  width: 100%;
  max-height: 600px;
  // overflow: hidden;
  padding: 10px;

  @media screen and (max-width: 800px) {
    min-width: 100%;
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #F5BD30; // #D4A24E;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media screen and (max-width: 585px) {
    font-size: 2rem;
  }

`

const GamesTextParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #F5BD30; // #D4A24E;
`
const GamesTextParagraphItalic = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #F5BD30; // #D4A24E;
  font-style: italic;
`
