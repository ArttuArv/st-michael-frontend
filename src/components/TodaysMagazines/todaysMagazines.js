import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const TodaysMagazines = () => {

  const { t } = useTranslation()

  return (
    <TodaysMagazinesWrapper>
      {/* <TodaysMagazinesImageWrapper>
        <TodaysMagazinesImage src={todaysMagazinesImage} alt="todaysMagazines" />
      </TodaysMagazinesImageWrapper> */}
      <TodaysMagazinesTextWrapper>
        <TodaysMagazinesText>
          <TodaysMagazinesTextHeader>
            {t('todaysMagazines.header')}
          </TodaysMagazinesTextHeader>
          <TodaysMagazinesTextParagraphItalic>
            {t('todaysMagazines.text')}
          </TodaysMagazinesTextParagraphItalic>
          <TodaysMagazinesTextParagraph>
            - {t('todaysMagazines.author')}
          </TodaysMagazinesTextParagraph>
        </TodaysMagazinesText>
      </TodaysMagazinesTextWrapper>
    </TodaysMagazinesWrapper>  
  )
}

export default TodaysMagazines

const TodaysMagazinesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: hsl(207, 19%, 9%); // #06260F;
  border: 2px solid #F5BD30; // #D4A24E;
  border-radius: 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const TodaysMagazinesWrapper = styled.div`
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

  @media screen and (max-width: 700px) {
    margin: 0 0 15px 0;
  }
`

const TodaysMagazinesImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: hsl(207, 19%, 9%); // #06260F;
  
  @media screen and (max-width: 700px) {
    height: 50%;
  }
`

const TodaysMagazinesImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
`

const TodaysMagazinesTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: hsl(207, 19%, 9%); // #06260F;

  @media screen and (max-width: 700px) {
    height: 50%;
  }
`

const TodaysMagazinesText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: hsl(207, 19%, 9%); // #06260F;
`

const TodaysMagazinesTextHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #F5BD30; // #D4A24E;
  text-align: center;
  margin: 0 0 10px 0;
`

const TodaysMagazinesTextParagraphItalic = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #F5BD30; // #D4A24E;
  text-align: center;
  margin: 0 0 10px 0;
`

const TodaysMagazinesTextParagraph = styled.p`
  font-size: 1.2rem;
  color: #F5BD30; // #D4A24E;
  text-align: center;
  margin: 0 0 10px 0;
`

