import { useState } from 'react'

import { 
  FormContainer,
  FormWrapperEvent,
  FormClose,
  Form,
  FormInput,
  FormSelect,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

const UpdateLiveMusicForm = ({ liveMusicToUpdate, visibility, updateLiveMusic }) => {
  const [artist, setArtist] = useState('')
  const [date, setDate] = useState('')  
  const [time, setTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedLiveMusic = {
      name: artist,
      date,
      time,
    }
    
    if (!artist)
      updatedLiveMusic.name = liveMusicToUpdate.name

    if (!date)
      updatedLiveMusic.date = liveMusicToUpdate.date
      
    if (!time)
      updatedLiveMusic.time = liveMusicToUpdate.time

    updateLiveMusic(liveMusicToUpdate.id, updatedLiveMusic) 

    // Nollataan syöttökentät
    resetStates()

    closeForm()
  }

  const resetStates = () => {
    setArtist('')
    setDate('')
    setTime('')
  }

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
  }

  const closeForm = () => {
    resetStates()

    visibility(false)
  }

  return (
    <FormContainer>
      <FormWrapperEvent>
        <FormClose onClick={closeForm} />
          <Form onSubmit={handleSubmit}>
            <div>
              <FormH2>Päivitä tapahtuma</FormH2>
              <FormP>{liveMusicToUpdate.date}</FormP>
              <FormP>{liveMusicToUpdate.time} : {liveMusicToUpdate.name}</FormP>
            </div>
            <FormH4>Tapahtuma</FormH4>
            <div>
              <FormInput
                type='text'
                id='artist'
                value={artist}
                onChange={handleArtistChange}
              />
            </div>
            <FormH4>Päivämäärä</FormH4>
            <div>
              <FormInput
                type='text'
                id='date'
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <FormH4>Alkamisaika</FormH4>
            <div>
              <FormInput
                type='text'
                id='time'
                value={time}
                onChange={handleTimeChange}
              />
            </div>
            <FormButton type='submit'>Päivitä</FormButton>
          </Form>
      </FormWrapperEvent>
    </FormContainer>
  )
}

export default UpdateLiveMusicForm

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