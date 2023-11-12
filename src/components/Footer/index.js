import React from 'react'
import { useTranslation } from 'react-i18next'
import { 
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterRow,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialMediaWrapper,
  SocialMediaIcons,
  SocialMediaIconLink,
  SocialMediaP,
  FooterTableWrapper,
  FooterTable,
  FooterTableBody,
  FooterTableRow,
  FooterTableData,
  FooterTableH3,
  FooterImage,
  FooterGridItem,
} from './FooterElements'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Logo from '../../assets/images/Michael-logorigin.png'
import Kartta from '../../assets/images/stMichael_kartta_brass.svg'

const googleMapsLink = 'https://goo.gl/maps/b1gAc9Sc58tcLdxo9'


const Footer = ({ openingHours }) => {
  const { t } = useTranslation()

  const onTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth',
    } );
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterGridItem>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.content')}</FooterLinkTitle>
              <FooterLink to = 'beer'>{t('footer.tuotteet')}</FooterLink>
              <FooterLink to = 'whisky'>{t('footer.viskit')}</FooterLink>
              <FooterLink to = 'story'>{t('footer.tarina')}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterGridItem>
        <FooterGridItem>         
          <FooterTableWrapper>
            <FooterTableH3>{t('footer.aukioloHeader')}:</FooterTableH3>              
            <FooterTable>
              <FooterTableBody>
                {openingHours.map( (item) => (
                  <FooterTableRow key = {item.id}>
                    <FooterTableData>{item.day}</FooterTableData>
                    <FooterTableData>{item.openinghours}</FooterTableData>
                  </FooterTableRow>
                ))}
              </FooterTableBody>
            </FooterTable>
          </FooterTableWrapper>
        </FooterGridItem>
        <FooterGridItem>
          <SocialMediaWrapper>         
            <FooterLogo draggable = 'false' onClick = {onTop} src = {Logo} alt = {''} />   
            <SocialMediaP>Hallituskatu 13 - 17 90100 Oulu</SocialMediaP>
            <SocialMediaP>puh: 08 311 7473</SocialMediaP>
            <SocialMediaP>stmichael@stmichael.fi</SocialMediaP>        
            <SocialMediaIcons>
              <SocialMediaIconLink href = '//www.facebook.com/irishpubstmichael' target = '_blank' aria-label = 'Facebook'>
                <FaFacebook />
              </SocialMediaIconLink>
              <SocialMediaIconLink href = '//www.instagram.com/st.michael_oulu' target = '_blank' aria-label = 'Facebook'>
                <FaInstagram />
              </SocialMediaIconLink>
              <SocialMediaIconLink href = 'mailto:stmichael@stmichael.fi' target = '_blank' aria-label = 'Mail'>
                <FaEnvelope />
              </SocialMediaIconLink>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </FooterGridItem>
        <a href={googleMapsLink}
          target = '_blank'
          rel = 'noopener noreferrer'
          aria-label = 'Google Maps'>
          <FooterImage 
            src = {Kartta} 
            alt = 'Kartta'             
          />  
        </a>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer