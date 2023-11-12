import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import video from '../../assets/video/guinness.mp4'
import video_nosound from '../../assets/video/guinness_nosound.mp4'
import Logo from  '../../assets/images/Michael-logo-green-glow.png' //'../../assets/images/Michael-logorigin.png'  //'../../assets/images/Michael-logo-vari.png'
import OpeningHours from './OpeningHours'
import { 
  HeroContainer,
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroLogo,
  HeroH1,
  HeroH3,
  HeroP,
} from './HeroElements'


const HeroSection = ({ openingHours }) => {
  const { t } = useTranslation()
  
  return (
    <HeroContainer draggable = 'false'>
      <HeroBg>
        <VideoBg 
          autoPlay 
          loop 
          muted 
          src = {video_nosound} 
          type = 'video/mp4' 
          playsInline 
        />
      </HeroBg>
      <HeroContent>
        <HeroLogo draggable = 'false' src = {Logo} alt = 'Logo' />
        <HeroH1>The only piece of Ireland in Oulu</HeroH1>
        <HeroP>Hallituskatu 13 - 17, 90100 Oulu</HeroP>
        <HeroP>Puh. 08 311 7473</HeroP>
        <HeroH3>{t('hero.aukioloHeader')}:</HeroH3>
        <OpeningHours openingHours = {openingHours} />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

HeroSection.propTypes = {
  openingHours:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      day: PropTypes.string.isRequired,
      openinghours: PropTypes.string.isRequired,
    })
  )
}