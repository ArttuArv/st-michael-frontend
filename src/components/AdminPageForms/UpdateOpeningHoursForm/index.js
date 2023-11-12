import { useState } from 'react'

import { 
  FormContainer,
  FormWrapperSmall,
  FormClose,
  Form,
  FormInput,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

const NewOpeningHoursForm = ({ openingHours, visibility, updateOpeningHours }) => {
  const [day, setDay] = useState(openingHours.day)  
  const [openinghours, setOpeningHours] = useState(openingHours.openinghours)

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedHours = {
      day,
      openinghours,
    }
    
    if (!day)
      updatedHours.day = openingHours.day

    if (!openinghours)
      updatedHours.openinghours = openingHours.openinghours    

    updateOpeningHours(openingHours.id, updatedHours) 

    // Nollataan syöttökentät
    resetStates()

    closeForm()
  }

  const resetStates = () => {
    setDay('')
    setOpeningHours('')
  }

  const handleDayChange = (event) => {
    setDay(event.target.value)
  }

  const handleHoursChange = (event) => {
    setOpeningHours(event.target.value)
  }

  const closeForm = () => {
    resetStates()

    visibility(false)
  }

  return (
    <FormContainer>
      <FormWrapperSmall>
        <FormClose onClick={closeForm} />
          <Form onSubmit={handleSubmit}>
            <FormH2>Päivitä aukioloaika</FormH2>
            <FormP>{openingHours.day}</FormP>
            <FormP>{openingHours.openinghours}</FormP>
            <FormH4>Päivät</FormH4>
              <FormInput
                type='text'
                id='day'
                value={day}
                onChange={handleDayChange}
              />
            <FormH4>Aukioloaika</FormH4>
              <FormInput
                type='text'
                id='openinghours'
                value={openinghours}
                onChange={handleHoursChange}
              />
            <FormButton type='submit'>Päivitä</FormButton>
          </Form>
      </FormWrapperSmall>
    </FormContainer>
  )
}

export default NewOpeningHoursForm

const styles = {
  transparentContainer: () => ({
    display: 'block',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    zIndex: '99',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }),
  wrapper: () => ({
    display: 'block',
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    width: '300px',
    height: '400px',
    zIndex: '200',
    border: '1px solid #000',
    backgroundColor: '#fff',
  }),
  closeButton: () => ({
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '5px',
    border: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
  }),
}