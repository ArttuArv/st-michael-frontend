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

  const links = [
    {id: 1, path: '/', text: 'Etusivu'},
    {id: 2, path: '/beer', text: 'Hanatuotteet'},
    {id: 3, path: '/whisky', text: 'Viskit'},
    {id: 4, path: '/story', text: 'Tarina'},
    {id: 5, path: '/login', text: 'Kirjaudu'},
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;