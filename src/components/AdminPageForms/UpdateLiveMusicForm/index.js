import { useState } from 'react'

import {
  FormContainer,
  FormWrapperSmall,
  FormClose,
  Form,
  FormInput,
  FormSelect,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

import { formatDateTimeToEuropean } from '../../../utils/utils'

const UpdateLiveMusicForm = ({ liveMusicToUpdate, visibility, updateLiveMusic }) => {
  const [artist, setArtist] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    let updatedLiveMusic = {
      name: artist === '' ? liveMusicToUpdate.name : artist,
      date: date === '' ? liveMusicToUpdate.date : date,
      time: time === '' ? liveMusicToUpdate.time : time,
    }

    updatedLiveMusic = formatDateTimeToEuropean(updatedLiveMusic)

    updateLiveMusic(liveMusicToUpdate.id, updatedLiveMusic)

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
    <>
      <FormContainer>
        <FormWrapperSmall>
          <FormClose onClick={closeForm} />
          <Form onSubmit={handleSubmit}>
            <FormH2>Päivitä tapahtuma</FormH2>
            <FormP>{liveMusicToUpdate.name}</FormP>
            <FormP>{liveMusicToUpdate.date} klo {liveMusicToUpdate.time}</FormP>
            <FormH4>Tapahtuma</FormH4>
            <FormInput
              type='text'
              id='artist'
              value={artist}
              onChange={handleArtistChange}
            />
            <FormH4>Päivämäärä</FormH4>
            <FormInput
              type='date'
              id='date'
              value={date}
              onChange={handleDateChange}
            />
            <FormH4>Alkamisaika</FormH4>
            <FormInput
              type='time'
              id='time'
              value={time}
              onChange={handleTimeChange}
            />
            <FormButton type='submit'>Päivitä</FormButton>
          </Form>
        </FormWrapperSmall>
      </FormContainer>
    </>
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




