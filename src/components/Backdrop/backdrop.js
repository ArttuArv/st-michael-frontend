import { motion } from 'framer-motion'
import ReactDom from 'react-dom'

import '../../index.css'

const Backdrop = ({ children, onClick }) => {

  return ReactDom.createPortal(
    <motion.div
      className='backdrop'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>,
    document.getElementById('portal')
  )
}

export default Backdrop