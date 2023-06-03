import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput, 
} from '../InputFormElements'

import { formatDateTimeToEuropean } from '../../../utils/utils'

import Notification from '../../Notification/Notification'

const NewLiveMusicForm = ({ createNewLiveMusic }) => {
  const [artist, setArtist] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!day || !time || !artist) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    let newLiveMusic = {
      name: artist,
      date: day,
      time,
    }

    newLiveMusic = formatDateTimeToEuropean(newLiveMusic)

    console.log(newLiveMusic)

    createNewLiveMusic(newLiveMusic)
    
    resetStates()
  }

  const resetStates = () => {
    setArtist('')
    setDay('')
    setTime('')
  }

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleDayChange = (event) => {
    setDay(event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
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
      <InputFormForm onSubmit={handleSubmit}>
        <InputFormH2>Lisää uusi</InputFormH2>
        <InputFormH2>tapahtuma</InputFormH2>
          <InputFormP>Tapahtuma</InputFormP>
          <InputFormInput
            value={artist}
            onChange={handleArtistChange}
            id='artist'
            placeholder='Aseta tapahtuma'
          />
          <InputFormP>Päivä</InputFormP>
          <InputFormInput
            type='date'
            value={day}
            onChange={handleDayChange}
            id='day'
            placeholder='Aseta päivä'
          />
          <InputFormP>Aika</InputFormP>
          <InputFormInput
            type='time'
            value={time}
            onChange={handleTimeChange}
            id='time'
            placeholder='Aseta alkamisaika'
          />
        <InputFormButton background = 'add' id="create-event-button" type="submit">
          Lisää
        </InputFormButton>
      </InputFormForm>
    </>
  )
}

export default NewLiveMusicForm