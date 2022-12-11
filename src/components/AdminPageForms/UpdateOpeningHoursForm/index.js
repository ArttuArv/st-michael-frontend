import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput, 
} from '../InputFormElements'

const NewOpeningHoursForm = ({ updateOpeningHours }) => {
  const [day, setDay] = useState('')
  const [openingHours, setOpeningHours] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const newHours = {
      day,
      openinghours: openingHours,
    }

    // createNewHours(newHours)
    
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

  return (
    <div>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Päivitä</InputFormH2>
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