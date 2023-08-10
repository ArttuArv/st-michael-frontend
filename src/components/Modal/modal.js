import { motion } from 'framer-motion'
import styled from 'styled-components';

import Backdrop from '../Backdrop/backdrop'

import '../../index.css'

const dropIn = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    opacity: 0,
    y: '100vh'
  }
}


const Modal = ({ handleClose, text, linkText, children }) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick = {(e) => e.stopPropagation()}
        className='help-modal'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p>{text}</p>
        <br />
        {linkText && <a href={linkText} target='_blank' rel='noreferrer'>YouTube-ohje</a>}
        {children}
        <XStyleButton onClick={handleClose}>&times;</XStyleButton>
      </motion.div>
    </Backdrop>
  )
}

export default Modal

const XStyleButton = styled.button`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;  
`