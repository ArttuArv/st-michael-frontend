import React from 'react'
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
import Kartta from '../../assets/images/stMichael_kartta.svg'


const Footer = ({ openingHours }) => {

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
              <FooterLinkTitle>Sisältö</FooterLinkTitle>
              <FooterLink to = 'beer'>Hanatuotteet</FooterLink>
              <FooterLink to = 'whisky'>Viskit</FooterLink>
              <FooterLink to = 'story'>Tarina</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterGridItem>
        <FooterGridItem>         
          <FooterTableWrapper>
            <FooterTableH3>Aukioloajat:</FooterTableH3>              
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
        <FooterImage src = {Kartta} alt = 'Kartta' />  
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer