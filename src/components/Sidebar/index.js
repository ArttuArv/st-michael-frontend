import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from '../../utils/i18next'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink,
  SideBarToggleWrapper, 
} from './SidebarElements'

import MobileLanguageSwitch from '../LanguageSwitch/MobileLanguageSwitch'

const Sidebar = ({ isOpen, toggle, toggleLang, language }) => {
  const { t } = useTranslation()

  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
      <Icon onClick = {toggle} >
        <CloseIcon onClick = {toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = "/" onClick = {() => toggle} >
            {t('nav.Etusivu')}
          </SidebarLink>
          <SidebarLink to = "/beer" onClick = {() => toggle} >
            {t('nav.Tuotteet')}
          </SidebarLink>
          <SidebarLink to = "/whisky" onClick = {() => toggle} >
            {t('nav.Viskit')}
          </SidebarLink>
          {/* <SidebarLink to = "/sports" onClick = {() => toggle} >
            Urheilu
          </SidebarLink> */}
          <SidebarLink to = "/story" onClick = {() => toggle} >
            {t('nav.Tarina')}
          </SidebarLink>
          <SidebarLink to = "/login" onClick = {() => toggle} >
            {t('nav.Kirjaudu')}
          </SidebarLink>
          <SideBarToggleWrapper>
            <MobileLanguageSwitch toggleLang = {toggleLang} language = {language} />
          </SideBarToggleWrapper>          
        </SidebarMenu>
      </SidebarWrapper>  
    </SidebarContainer>
  )
}

export default Sidebar
