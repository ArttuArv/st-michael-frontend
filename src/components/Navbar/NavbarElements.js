import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  background: ${({ scrollNav }) => ( scrollNav 
    ? '#06260F' 
    : 'transparent' )}; 
  border-bottom: ${({ scrollNav }) => ( scrollNav 
    ? '3px solid #F5BD30' 
    : 'none' )}; 
  height: 80px;
  margin-top: -80px; 
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.4s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.4s all ease;
  }

  @media screen and (max-width: 768px) {
    background: transparent;
    border-bottom: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  widht: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`    // Navbar Logo
  color: #D4A24E;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoImg = styled.img`       // Logo vasen yläkulma
  display: ${({ scrollNav }) => ( scrollNav 
    ? 'flex' 
    : 'none' )}; 
  width: 100%;
  max-width: 70px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 42px;
  margin-left: 36px;  
  cursor: pointer;
  justify-self: flex-start;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  } 

  @media screen and (max-width: 769px) {
    max-width: 50px;
    margin-top: 20px;
  
  @media screen and (max-width: 400px) {
    max-width: 40px;
  }
`;

export const MobileIcon = styled.div`       // Menu-ikoni oikea yläreuna
    display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
  }

  @media screen and (max-width: 390px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
  }
`;

export const NavMenu = styled.ul` 
  display: flex;
  list-style: none;
  text-align: center; 

  @media screen and (max-width: 768px) {    
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
  height: 30px;
  margin-top: 20px;
`;

export const NavLinkTo = styled(LinkRouter)`
  display: flex;
  color: #F5BD30;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;  

  &:hover {
    border-bottom: 3px solid #F5BD30;
    transition: 0.1s ease-in-out;    
  }

  &.active {
    border-bottom: 9px solid #F5BD30;
  }
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  color: #F5BD30;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;  

  &:hover {
    border-bottom: 3px solid #F5BD30;
    transition: 0.1s ease-in-out;    
  }

  &.active {
    border-bottom: 9px solid #F5BD30;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkScroll)`
  border-radius: 50px;
  background: #d4af37;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01b0606;
`;