import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput, 
} from '../InputFormElements'

import Notification from '../../Notification/Notification'

const NewOpeningHoursForm = ({ createNewHours }) => {
  const [day, setDay] = useState('')
  const [openingHours, setOpeningHours] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!day || !openingHours) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    const newHours = {
      day,
      openinghours: openingHours,
    }

    createNewHours(newHours)
    
    // Nollataan syöttökentät
    setDay('')
    setOpeningHours('')
  }

  const handleDayChange = (event) => {
    setDay(event.target.value)
  }

  const handleHoursChange = (event) => {
    setOpeningHours(event.target.value)
  }

  const notify = (message, type = 'info') => {

    new Notification({
      text: message,
      position: "top-center",
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      color: type === 'info' ? '##1DB954' : '#FF4136',
    })
  }

  return (
    <div>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Lisää uusi</InputFormH2>
        <InputFormH2>aukioloaika</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormP>Päivä</InputFormP>
            <InputFormInput
              value={day}
              onChange={handleDayChange}
              id='day'
              placeholder='Aseta päivä'
            />
          </InputFormItems>
          <InputFormItems>
            <InputFormP>Aukioloaika</InputFormP>
            <InputFormInput
              value={openingHours}
              onChange={handleHoursChange}
              id='openingHours'
              placeholder='Aseta aukioloaika'
            />
          </InputFormItems>
          <InputFormButton background = 'add' id="login-button" type="submit">
            Lisää
          </InputFormButton>
        </InputFormForm>
      </div>
    </div>
  )
}

export default NewOpeningHoursForm