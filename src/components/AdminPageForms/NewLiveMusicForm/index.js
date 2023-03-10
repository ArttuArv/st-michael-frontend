import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput, 
} from '../InputFormElements'

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

    const newLiveMusic = {
      name: artist,
      date: day,
      time,
    }

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
    <div>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Lisää uusi</InputFormH2>
        <InputFormH2>tapahtuma</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormP>Tapahtuma</InputFormP>
            <InputFormInput
              value={artist}
              onChange={handleArtistChange}
              id='artist'
              placeholder='Aseta tapahtuma'
            />
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
            <InputFormP>Aika</InputFormP>
            <InputFormInput
              value={time}
              onChange={handleTimeChange}
              id='time'
              placeholder='Aseta alkamisaika'
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

export default NewLiveMusicForm