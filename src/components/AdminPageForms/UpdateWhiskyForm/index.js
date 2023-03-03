import { useState } from 'react'
import styled, { keyframes } from 'styled-components';

import Notification from '../../Notification/Notification'



const UpdateWhiskyForm = ({ whisky, updateWhisky, visibility }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [area, setArea] = useState('')

  console.log(whisky)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name) {
      notify('Anna uusi nimi', 'alert')

      return
    }

    const updatedWhisky = {
      name,
      area,
    }

    if (!area) updatedWhisky.area = whisky.area

    console.log('updatedWhisky: ', updatedWhisky)

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
          <h2>Päivitä viski</h2>
          <p>{whisky.name}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Nimi</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor='area'>Alue</label>
              <input
                type='text'
                id='area'
                value={area}
                onChange={handleAreaChange}
              />
            </div>
            <button type='submit'>Päivitä</button>
          </form>
        </div>
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
  border: 4px solid red;
  background-color: #fff;
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