import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput,
  InputFormSelect,
  InputFormOption,
  InputFormLabel
} from '../InputFormElements'

import Notification from '../../Notification/Notification'

const NewOpeningHoursForm = ({ currentOpeningHours, updateOpeningHours }) => {
  const [day, setDay] = useState('')
  const [id, setId] = useState('')
  const [openinghours, setOpeningHours] = useState('')

  const fakeOpeningHours = {
    id: 'Valitse listasta',
    day: 'Valitse listasta',
    openinghours: 'Valitse listasta',
  }

  currentOpeningHours = [
    fakeOpeningHours,
    ...currentOpeningHours
  ]

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedHours = {
      day,
      openinghours,
    }
    
    if (id === 'Valitse listasta' || !id) {
      notify('Et valinnut muutettavaa päivää', 'alert')

      return
    }

    if (!day || !openinghours) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    updateOpeningHours(id, updatedHours) 

    // Nollataan syöttökentät
    resetStates()
  }

  const resetStates = () => {
    setId('')
    setDay('')
    setOpeningHours('')
  }

  const handleIdChange = (event) => {
    setId(event.target.value)
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
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Päivitä</InputFormH2>
        <InputFormH2>aukioloaika</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormLabel>Muutettava päiväys</InputFormLabel>
            <InputFormSelect value={id} onChange={handleIdChange}>
              {currentOpeningHours.map((days) => (
                <InputFormOption key={days.day} value={days.id}>{days.day}</InputFormOption>
              ))}
            </InputFormSelect>
          </InputFormItems>
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
              value={openinghours}
              onChange={handleHoursChange}
              id='openingHours'
              placeholder='Aseta aukioloaika'
            />
          </InputFormItems>
          <InputFormButton background = 'add' id="login-button" type="submit">
            Päivitä
          </InputFormButton>
        </InputFormForm>
      </div>
    </>
  )
}

export default NewOpeningHoursForm