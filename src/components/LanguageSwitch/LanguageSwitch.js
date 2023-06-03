
import './toggleStyles.css'

const LanguageSwitch = ({ toggleLang, language }) => {

  // console.log('LanguageSwitch: ', language)

  return (
    <>
      <div className="switch" onChange={toggleLang}>
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        value={language === 'fi' ? 'en' : 'fi'}
        onClick={toggleLang}
      />
      <label htmlFor="language-toggle"></label>
      <span value='fi' className="on">
        FI
      </span>
      <span value='en' className="off">
        EN
      </span>
    </div>
    </>
  )
}

export default LanguageSwitch