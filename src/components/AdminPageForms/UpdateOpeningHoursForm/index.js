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
  const [openingHours, setOpeningHours] = useState('')

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
      id: id,
      day: day,
      openinghours: openingHours,
    }
    
    if (updatedHours.id === 'Valitse listasta' || !updatedHours.id) {
      alert('Et valinnut muutettavaa päivää')
      resetStates()

      return
    }      

    updateOpeningHoursTest(updatedHours)

    
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

  console.log('openingHours: ', openingHours)
  console.log('day: ', day)
  console.log('id: ', id)
  console.log('currentOpeningHours: ', currentOpeningHours)

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
            <InputFormSelect value={day} onChange={handleIdChange}>
              {currentOpeningHours.map((hours) => (
                <InputFormOption key={hours.day} value={hours.day}>{hours.day}</InputFormOption>
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
              value={openingHours}
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