import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #1f1a17;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media (min-width: 769px) {
    display: none;
`;

export const CloseIcon = styled(FaTimes)`     // Sulkemisrasti
  color: #f5bd30;

  :hover {
    color: #C49726;
    transition: 0.2 ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`           // Menun lista-asettelu
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 150px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 100px);
  }
`;

export const SidebarLink = styled(LinkRouter)`    // Linkkitekstit
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #f5bd30;
  cursor: pointer;

  &:hover {
    color: #C49726;
    transition: 0.2 ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #d4af37;
  white-space: nowrap;
  padding: 16px 64px; 
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #ffff00;
    color: #010606;
  }
`;