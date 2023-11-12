import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import styled, { keyframes } from 'styled-components';

const WhiskyFrontpageAdd = () => {
  const { t } = useTranslation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {

    if (isInView) {
      mainControls.start('visible')
    }

  }, [isInView])



  const whiskybottlesImage = require('../../assets/images/whiskybottles.jpg')
  const whiskybarImage = require(`../../assets/images/whiskybar.jpg`)

  return (
    <>
      <WhiskyFrontpageAddContainer>
        <WhiskyFrontpageAddItemWrapper>
          <WhiskyFrontpageAddImageWrapper image={whiskybarImage}></WhiskyFrontpageAddImageWrapper>
          <WhiskyFrontpageAddTextWrapper ref = {ref}>

            <AnimatePresence
              initial={true}
              mode='in-out'
              onExitComplete={() => null}
            >
              <motion.div
                
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                  hidden: { 
                    opacity: 0,
                    y: 200,
                  },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <WhiskyFrontpageAddH2>{t('whiskyFrontpageAdd.header')}</WhiskyFrontpageAddH2>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence
              initial={true}
              mode='in-out'
              onExitComplete={() => null}
            >
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                  hidden: {
                    opacity: 0,
                    x: -200,
                  },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <WhiskyFrontpageAddP>
                  {t('whiskyFrontpageAdd.paragraph')}
                </WhiskyFrontpageAddP>
              </motion.div>
            </AnimatePresence>

          </WhiskyFrontpageAddTextWrapper>
        </WhiskyFrontpageAddItemWrapper>
      </WhiskyFrontpageAddContainer>          
    </>
  )
}

export default WhiskyFrontpageAdd

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`
const textGlow = keyframes`
  0% {
    text-shadow: 0 0 1px #F3ECDE;
  }
  50% {
    text-shadow: 0 0 10px #F3ECDE;
  }
  100% {
    text-shadow: 0 0 15px #F3ECDE;
  }
`

const WhiskyFrontpageAddContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000; //var(--clr-neutral-900);

  height: 100%;
  width: 100%;
  color: #D4A24E;
  border-bottom: 3px solid #D4A24E;

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
  height: 500px;
  width: 100%;

  background-image: linear-gradient(to right, transparent 70%, rgba(0, 0, 0, 0.95) 80%),
                    linear-gradient(to left, transparent 80%, rgba(0, 0, 0, 1)),
                    ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 867px) {
    background-image: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.95) 80%),
                      linear-gradient(to top, transparent 80%, rgba(0, 0, 0, 1)),
                      linear-gradient(to left, transparent 50%, rgba(0, 0, 0, 1)),
                      linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 1)),
                       ${(props) => `url(${props.image})`};
  }
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
  width: 100%;
  height: 500px;
  align-items: center;
  background: linear-gradient(to left, transparent 40%, rgba(0, 0, 0, 1) 90%),
              linear-gradient(to right, transparent 10%, rgba(0, 0, 0, 0.8) 90%),
              #000;

  @media screen and (max-width: 867px) {
    height: 100%;
  }
  
`

const WhiskyFrontpageAddH2 = styled.h2`
  color: #C49E5B;
  font-size: 3rem;
  text-align: center;
  line-height: 1;
  font-weight: 600;
  padding: 0 1rem;
  margin-bottom: 1rem;
  animation: ${textGlow} 1s ease-in-out infinite alternate;
  position: relative;
  z-index: 1;
  left: -120px;

  @media screen and (max-width: 867px) {
    font-size: 3rem;
    padding: 0 1.5rem;
    left: 0px;
    top: -100px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const WhiskyFrontpageAddP = styled.p`
  color: #C49E5B;
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
  left: -120px;

  @media screen and (max-width: 867px) {
    font-size: 1rem;
    left: 0px;
    top: -100px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`
