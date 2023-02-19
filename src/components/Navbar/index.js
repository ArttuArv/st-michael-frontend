import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/michael-logo-nelio.png'
import { 
  Nav, 
  NavbarContainer, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLogoImg,
  NavLinkTo,
  NavLinks
} from './NavbarElements'

const Navbar  = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const onTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav = {scrollNav}>        
        <NavbarContainer>
        <NavLogoImg scrollNav = {scrollNav} onClick = {onTop} src = {Logo} alt = {''}  />
          <MobileIcon >
            <FaBars onClick = {toggle}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkTo to = '/' >
                Etusivu
              </NavLinkTo>
            </NavItem>
            <NavItem>
              <NavLinkTo to = '/beer' >
                Hanatuotteet
              </NavLinkTo>
            </NavItem>
            <NavItem>
              <NavLinkTo to = '/whisky' >
                Viskit
              </NavLinkTo>
            </NavItem>
            {/* <NavItem>
              <NavLinkTo to = '/sports' >
                Urheilu
              </NavLinkTo>
            </NavItem> */}
            <NavItem>
              <NavLinkTo to = '/story' >
                Tarina
              </NavLinkTo>
            </NavItem>
            <NavItem>
              <NavLinkTo to = '/login' >
                Kirjaudu
              </NavLinkTo>
            </NavItem>
            {/* <NavItem>
              <NavLinks 
                to = '/' 
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Etusivu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = 'whisky'
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Hanasta
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = 'whisky'  
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Viskit
              </NavLinks>
              </NavItem>*/}
            {/* <NavItem>
              <NavLinks 
                to = 'sports'  
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Urheilu
              </NavLinks>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;