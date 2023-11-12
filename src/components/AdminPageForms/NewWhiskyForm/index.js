import { useState } from 'react'

import {
  InputFormButton,
  InputFormH2,
  InputFormP,
  InputFormForm,
  InputFormItems,
  InputFormInput,
  InputFormLabel,
  InputFormSelect,
  InputFormOption
} from '../InputFormElements'

import Notification from '../../Notification/Notification'

import { returnListOfWhiskyAreas } from '../../../utils/utils'

const NewWhiskyForm = ({ createNewWhisky, currentWhiskies }) => {
  const [name, setName] = useState('')
  const [area, setArea] = useState('')

  const whiskyAreas = returnListOfWhiskyAreas(currentWhiskies)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const newWhisky = {
      name,
      area,
    }

    if (area === 'Valitse listasta' || !area) {
      notify('Valitse alue', 'alert')

      return
    }

    if (!name) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    createNewWhisky(newWhisky, area)

    // Nollataan syöttökentät
    resetStates()

  }

  const resetStates = () => {
    setName('')
    setArea('')
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleAreaChange = (event) => {
    setArea(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
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
    <InputFormForm onSubmit={handleSubmit}>
      <InputFormH2>Lisää viski</InputFormH2>
      <InputFormP>Nimi</InputFormP>
      <InputFormInput
        value={name}
        onChange={handleNameChange}
        id='name'
        placeholder='Viskin nimi'
      />
      <InputFormLabel>Alue</InputFormLabel>
      <InputFormSelect value={area} onChange={handleAreaChange}>
        {whiskyAreas.map((area) => (
          <InputFormOption key={area} value={area}>{area}</InputFormOption>
        ))}
      </InputFormSelect>
      <InputFormButton background='add' id='create-whisky-button' type='submit'>Lisää</InputFormButton>
    </InputFormForm>
  )
}

export default NewWhiskyForm