import React from 'react'
import styled from 'styled-components'

const WhiskyFrontpageAdd = () => {

  const whiskybottlesImage = require('../../assets/images/whiskybottles.jpg')
  const whiskybarImage = require('../../assets/images/whiskybar.jpg')

  return (
    <>
      <WhiskyFrontpageAddContainer>
        <WhiskyFrontpageAddItemWrapper>
          <WhiskyFrontpageAddImageWrapper>
            <WhiskyFrontpageAddImage1 src = {whiskybarImage} />
            {/* <WhiskyFrontpageAddImage2 src = {whiskybottlesImage} /> */}
          </WhiskyFrontpageAddImageWrapper>
          <WhiskyFrontpageAddTextWrapper>
            <WhiskyFrontpageAddH2>
              Suomen kattavin viskitarjonta
            </WhiskyFrontpageAddH2>
            <WhiskyFrontpageAddP>
              Jotain tekstiä tähän.
            </WhiskyFrontpageAddP>
          </WhiskyFrontpageAddTextWrapper>
        </WhiskyFrontpageAddItemWrapper>
      </WhiskyFrontpageAddContainer>          
    </>
  )
}

export default WhiskyFrontpageAdd

const WhiskyFrontpageAddContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000; //var(--clr-neutral-900);
  padding: 0 30px;
  height: 100%;
  width: 100%;
  color: #D4A24E;
  border-bottom: 3px solid #D4A24E;

  // :before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(0, 0, 0, 0.2) 0%,
  //     rgba(0, 0, 0, 0.6) 100%
  //   ),
  //   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  //   z-index: 2;
  // }

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`

const WhiskyFrontpageAddItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1660px;

  @media screen and (max-width: 867px) {
    flex-direction: column;
  }
`

const WhiskyFrontpageAddImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const WhiskyFrontpageAddImage1 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  // -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
  background: linear-gradient(red, yellow, blue, orange)
`
const WhiskyFrontpageAddImage2 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  margin-left: -200px;
  // fade out the left
  // -webkit-mask-image:-webkit-gradient(linear, right top, left, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))

`

const WhiskyFrontpageAddTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const WhiskyFrontpageAddH2 = styled.h2`
  color: gold; //#D4A24E;
  font-size: 32px;
  text-align: center;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

const WhiskyFrontpageAddP = styled.p`
  margin-top: 24px;
  color: gold; //#D4A24E;
  font-size: 1rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`
