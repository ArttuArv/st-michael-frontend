import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
      <Icon onClick = {toggle} >
        <CloseIcon onClick = {toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = "/" onClick = {() => toggle} >
            Etusivu
          </SidebarLink>
          <SidebarLink to = "/beer" onClick = {() => toggle} >
            Tuotteet
          </SidebarLink>
          <SidebarLink to = "/whisky" onClick = {() => toggle} >
            Viskit
          </SidebarLink>
          {/* <SidebarLink to = "/sports" onClick = {() => toggle} >
            Urheilu
          </SidebarLink> */}
          <SidebarLink to = "/story" onClick = {() => toggle} >
            Tarina
          </SidebarLink>
          <SidebarLink to = "/login" onClick = {() => toggle} >
            Kirjaudu
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>  
    </SidebarContainer>
  )
}

export default Sidebar