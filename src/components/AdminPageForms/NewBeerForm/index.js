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

const NewBeerForm = ({ createNewBeer }) => {
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const beerCategories = [
    'Valitse listasta',
    'Seasonal Bottles',
    'Seasonal Draughts',
    'Regular Bottles',
    'Regular Draughts',
  ]

  const handleSubmit = (event) => {
    event.preventDefault()



    if (category === 'Valitse listasta' || !category) {
      notify('Valitse kategoria', 'alert')

      return
    }

    if (!name || !style || !country) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    const newBeer = {
      name,
      style,
      country,
      price,
      category,
    }

    createNewBeer(newBeer)

    // Nollataan syöttökentät
    resetStates()

  }

  const resetStates = () => {
    setName('')
    setStyle('')
    setCountry('')
    setPrice('')
    setCategory('')
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleStyleChange = (event) => {
    setStyle(event.target.value)
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
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
        <InputFormH2>Lisää olut</InputFormH2>
        <InputFormP>Nimi</InputFormP>
        <InputFormInput
          value={name}
          onChange={handleNameChange}
          id='beer-name'
          placeholder='Oluen nimi'
        />
        <InputFormP>Tyyppi</InputFormP>
        <InputFormInput
          value={style}
          onChange={handleStyleChange}
          id='beer-style'
          placeholder='Oluen tyyppi esim. IPA'
        />
        <InputFormP>Maa</InputFormP>
        <InputFormInput
          value={country}
          onChange={handleCountryChange}
          id='beer-country'
          placeholder='Oluen kotimaa'
        />
        <InputFormLabel>Kategoria</InputFormLabel>
        <InputFormSelect value={category} onChange={handleCategoryChange}>
          {beerCategories.map(beerArea => (
            <InputFormOption key={beerArea} value={beerArea}>{beerArea}</InputFormOption>
          ))}
        </InputFormSelect>
        <InputFormButton background='add' id="create-beer-button" type="submit">Lisää</InputFormButton>
      </InputFormForm>      
    </>
  )
}

export default NewBeerForm