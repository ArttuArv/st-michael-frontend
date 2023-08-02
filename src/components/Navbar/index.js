import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Logo from '../../assets/images/michael-logo-nelio.png'
import { 
  Nav, 
  NavbarContainer, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLogoImg,
  NavLinkTo,
} from './NavbarElements'

import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js'


const Navbar  = ({ toggle, toggleLang, language, isMobile }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const { t } = useTranslation()

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const onTop = () => {
    scroll.scrollToTop()
  }

  const links = [
    {id: 1, path: '/', text: t('nav.Etusivu')},
    {id: 2, path: '/beer', text: t('nav.Tuotteet')},
    {id: 3, path: '/whisky', text: t('nav.Viskit')},
    {id: 4, path: '/story', text: t('nav.Tarina')},
    // {id: 5, path: '/admin', text: t('nav.Kirjaudu')},
  ]

  return (
    <>
      <Nav scrollNav = {scrollNav}>        
        <NavbarContainer>
        <NavLogoImg scrollNav = {scrollNav} onClick = {onTop} src = {Logo} alt = {''}  />
          <MobileIcon >
            <FaBars onClick = {toggle}/>
          </MobileIcon>
          <NavMenu>
            {links.map(link => (
              <NavItem key = {link.id}>
                <NavLinkTo to = {link.path}>
                  {link.text}
                </NavLinkTo>
              </NavItem>
            ))}
            <LanguageSwitch toggleLang = {toggleLang} language = {language} />
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar


