import { useState, useImperativeHandle, forwardRef } from 'react'

import { TogglableButton } from './TogglableElements'

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}


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
    <div style={flexContainer}>
      <div style={hideWhenVisible}>
        <TogglableButton background = 'add' onClick={toggleVisibility}>{props.buttonLabel}</TogglableButton>
      </div>
      <div style={{...showWhenVisible, margin: '15px'}}>
        {props.children}
        <TogglableButton 
          background = 'light' 
          onClick={toggleVisibility}
          >
          Hylkää
        </TogglableButton>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable