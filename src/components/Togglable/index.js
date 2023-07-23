import { useState, useImperativeHandle, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import NotificationModal from '../Modal/modal'

import { TogglableButton, TogglableWrapper } from './TogglableElements'
import { LoginPageInfoButton } from '../LoginPageStyledComponents/LoginPageElements'

const LoginModalButton = ({ modalOpen, closeModal, openModal }) => {

  return (
    <LoginPageInfoButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // className='help-button'
      onClick={() => (modalOpen ? closeModal() : openModal())}
    >
      &#9432;
    </LoginPageInfoButton>
  )

}


const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const newFormHelpText = 'Lisääminen onnistuu täyttämällä lomake ja klikkaamalla lisää-nappia. Kaikki kentät ovat pakollisia ja lomake herjaa jos jokin kenttä on tyhjä.'

  const close = () => {
    setModalOpen(false)
  }

  const open = () => {
    setModalOpen(true)
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <>
       <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={() => null}
        >
          {modalOpen && <NotificationModal handleClose={close} text={newFormHelpText} />}
        </AnimatePresence>

      <TogglableWrapper style={hideWhenVisible}>
        <TogglableButton background = 'add' onClick={toggleVisibility}>{props.buttonLabel}</TogglableButton>
      </TogglableWrapper>
      <TogglableWrapper style={{...showWhenVisible,}}>
        {props.children}
        <TogglableButton 
          background = 'light' 
          onClick={toggleVisibility}
          >
          Hylkää
        </TogglableButton>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

      </TogglableWrapper>
    </>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable