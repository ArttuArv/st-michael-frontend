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
    <>
      <InputFormForm onSubmit={handleSubmit}>
        <InputFormH2>Lisää uusi</InputFormH2>
        <InputFormH2>aukioloaika</InputFormH2>
          <InputFormP>Päivä</InputFormP>
          <InputFormInput
            value={day}
            onChange={handleDayChange}
            id='openinghours-day'
            placeholder='Aseta päivä'
          />
          <InputFormP>Aukioloaika</InputFormP>
          <InputFormInput
            value={openingHours}
            onChange={handleHoursChange}
            id='openingHours'
            placeholder='Aseta aukioloaika'
          />
        <InputFormButton background = 'add' id="create-openinghours-button" type="submit">
          Lisää
        </InputFormButton>
      </InputFormForm>
    </>
  )
}

export default NewOpeningHoursForm