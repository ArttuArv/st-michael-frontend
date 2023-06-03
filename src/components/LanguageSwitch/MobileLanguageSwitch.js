import React, { useState } from 'react'
import './toggleStyles.css'

const MobileLanguageSwitch = ({ toggleLang, language }) => {

  // console.log('MobileLanguageSwitch: ', language)

  return (
    <>
      <div className="mobile-switch" onChange={toggleLang}>
        <input
          id="mobile-language-toggle"
          className="mobile-check-toggle mobile-check-toggle-round-flat"
          type="checkbox"
          value={language === 'fi' ? 'en' : 'fi'}
          onClick={toggleLang}
        />
        <label htmlFor="mobile-language-toggle"></label>
        <span value='fi' className="mobile-on">
          FI
        </span>
        <span value='en' className="mobile-off">
          EN
        </span>          
  	  </div>
    </>
  )
}

export default MobileLanguageSwitch