import { useState, useEffect } from 'react'

import { 
  FormContainer,
  FormWrapperOpening,
  FormClose,
  Form,
  FormInput,
  FormSelect,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

import Notification from '../../Notification/Notification'


const UpdateWhiskyForm = ({ whiskyToUpdate, updateWhisky, visibility }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [area, setArea] = useState('')
  const [whisky, setWhisky] = useState({})

  const whiskyAreas = [
    'Valitse listasta',
    'Highland',
    'Lowland',
    'Campbeltown',
    'Irish',
    'Islands',
    'Japan',
    'Other Countries / Bourbons',
    'Uutuudet'
  ]

  const handleSubmit = (event) => {
    event.preventDefault()

    if (area === 'Valitse listasta' || area === '') {
      notify('Valitse alue', 'error')

      return
    }

    const updatedWhisky = {
      name,
      area,
    }

    if (name === '') {
      setName(whiskyToUpdate.name)
      updatedWhisky.name = whiskyToUpdate.name   
    }

    updateWhisky(whiskyToUpdate.id, updatedWhisky)

    resetStates()

    closeForm()
  }

  const resetStates = () => {
    setName('')
    setArea('')
  }


  const handleIdChange = (event) => {
    setId(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleAreaChange = (event) => {
    setArea(event.target.value)
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

  const closeForm = () => {
    resetStates()

    visibility(false)
  }

  return (
    <FormContainer>
      <FormWrapperOpening>
        <FormClose onClick={closeForm} />
          <Form onSubmit={handleSubmit}>
            <div>
              <FormH2>Päivitä viski</FormH2>
              <FormP>{whiskyToUpdate.name}</FormP>
            </div>
            <FormH4>Nimi</FormH4>
            <div>
              <FormInput
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <FormH4>Alue</FormH4>
            <div>
              <FormSelect onChange={handleAreaChange}>
                {whiskyAreas.map(area => <option key={area} value={area}>{area}</option>)}
              </FormSelect>
            </div>
            <FormButton type='submit'>Päivitä</FormButton>
          </Form>
      </FormWrapperOpening>
    </FormContainer>
  )
}

export default UpdateWhiskyForm

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