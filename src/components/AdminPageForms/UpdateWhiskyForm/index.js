import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';

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
    setId('')
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
      <FormWrapper>
        <FormClose onClick={closeForm} />
        <div>
          <FormH2>Päivitä viski</FormH2>
          <p>{whiskyToUpdate.name}</p>
        </div>
          <Form onSubmit={handleSubmit}>
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
      </FormWrapper>
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

const jitter = keyframes`
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(1.3) scaleX(1.3);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
`
const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

const FormWrapper = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 300px;
  height: 400px;
  z-index: 200;
  border: 4px solid gold;
  background-color: #A69666;
  border-radius: 15px;
  padding: 1rem;
`

const FormClose = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;  

  &:after {
    content: '\\00D7';  
    font-size: 30px; 
  }

  &:hover {
    opacity: 1;
    color: red;
    animation: ${jitter} 0.5s linear infinite;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 90%;
`

const FormInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const FormSelect = styled.select`
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const FormButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: gold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: green;
    color: #fff;
  }
`
const FormH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const FormH4 = styled.h4`
  margin-top: 1rem;
  font-size: 1.2rem;
`