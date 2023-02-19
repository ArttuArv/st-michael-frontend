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

    if (category === 'Valitse listasta' || !category) {
      alert('Valitse kategoria')

      return
    }

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