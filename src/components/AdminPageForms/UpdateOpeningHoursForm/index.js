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

const updateOpeningHoursTest = (updatedHours) => {
  console.log('updatedHours: ', updatedHours)
}

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

    console.log('updatedHours: ', updatedHours)
    
    if (id === 'Valitse listasta' || !id) {
      alert('Et valinnut muutettavaa päivää')
      resetStates()

      return
    }      

    // updateOpeningHoursTest(updatedHours)

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

  return (
    <div>
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
    </div>
  )
}

export default NewOpeningHoursForm