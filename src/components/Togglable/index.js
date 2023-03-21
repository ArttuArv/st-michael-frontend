import { useState, useImperativeHandle, forwardRef } from 'react'

import { TogglableButton, TogglableWrapper } from './TogglableElements'


const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

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
      </TogglableWrapper>
    </>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable