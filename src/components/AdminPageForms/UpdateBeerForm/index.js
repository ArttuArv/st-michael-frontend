import { useState } from 'react'

import { 
  InputFormButton, 
  InputFormH2, 
  InputFormP, 
  InputFormForm, 
  InputFormItems, 
  InputFormInput,
  InputFormSelect,
  InputFormOption,
  InputFormLabel
} from '../InputFormElements'

import Notification from '../../Notification/Notification'

const UpdateBeerForm = ({ currentBeers, updateBeer }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const beerCategories = returnListOfBeerCategories(currentBeers)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (category === 'Valitse listasta' || !category) {
      notify('Valitse kategoria', 'alert')

      return
    }

    if (!style || !country) {
      notify('Täytä kaikki kentät', 'alert')

      return
    }

    if (!id) {
      notify('Valitse olut listasta', 'alert')

      return
    }

    let existingBeerCategory
    const existingBeerName = currentBeers.map(beers => beers.products).flat().find(beer => beer.id === id)

    const updatedBeer = {
      name,
      style,
      country,
      price,
      category,
    }

    if (name === '' || !name)
      updatedBeer.name = existingBeerName.name    

    existingBeerCategory = existingBeerName.category

    updateBeer(id, existingBeerCategory, updatedBeer)

    resetStates()
  }

  const resetStates = () => {
    setId('')
    setName('')
    setStyle('')
    setCountry('')
    setPrice('')
    setCategory('')
  }

  const handleIdChange = (event) => {
    setId(event.target.value)
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
    <>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Päivitä olut</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormLabel>Valitse olut</InputFormLabel>
            <InputFormSelect value={id} onChange={handleIdChange}>
              {currentBeers.map(beers => beers.products.map(beer => (
                <InputFormOption key={beer.id} value={beer.id}>{beer.name}</InputFormOption>
              )))}
            </InputFormSelect>
          </InputFormItems>
          <InputFormItems>
            <InputFormP>Nimi</InputFormP>
            <InputFormInput
              value={name}
              onChange={handleNameChange}
              id='style'
              placeholder='Jätä tyhjäksi jos haluat säilyttää nykyisen nimen'
            />
          </InputFormItems>
          <InputFormItems>
            <InputFormP>Tyyppi</InputFormP>
            <InputFormInput
              value={style}
              onChange={handleStyleChange}
              id='style'
              placeholder='Oluen tyyppi esim. IPA'
            />
          </InputFormItems>
          <InputFormItems>
            <InputFormP>Maa</InputFormP>
            <InputFormInput
              value={country}
              onChange={handleCountryChange}
              id='country'
              placeholder='Oluen kotimaa'
            />
          </InputFormItems>
          <InputFormItems>
            <InputFormLabel>Kategoria</InputFormLabel>
            <InputFormSelect value={category} onChange={handleCategoryChange}>
              {beerCategories.map(beerArea => (
                <InputFormOption key={beerArea} value={beerArea}>{beerArea}</InputFormOption>
              ))}
            </InputFormSelect>
          </InputFormItems>
           <InputFormButton background = 'add' id="login-button" type="submit">
             Päivitä
           </InputFormButton>
         </InputFormForm>
       </div>
    </>
  )
}

export default UpdateBeerForm

function returnListOfBeerCategories(currentBeers) {
  let beerCategories = currentBeers.map(category => category.name)

  beerCategories = [
    'Valitse listasta',
    ...beerCategories,
  ]

  return beerCategories
}