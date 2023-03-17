import React from 'react'
import ReactDom from 'react-dom'

const Modal = ({ visible, children }) => {

  if (!visible) return null

  return ReactDom.createPortal(
    <div>
      {children}
    </div>,
    document.getElementById('portal')
  )
}

export default Modal