import { useState } from 'react'

import {
  FormContainer,
  FormWrapperLarge,
  FormClose,
  Form,
  FormInput,
  FormSelect,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

const UpdateBeerForm = ({ beer, updateBeer, visibility }) => {
  const [name, setName] = useState(beer.name)
  const [style, setStyle] = useState(beer.style)
  const [country, setCountry] = useState(beer.country)
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(beer.category)

  // const beerCategories = returnListOfBeerCategories(currentBeers)

  const beerCategories = [
    'Valitse listasta',
    'Seasonal Bottles',
    'Seasonal Draughts',
    'Regular Bottles',
    'Regular Draughts',
  ]

  const handleSubmit = (event) => {
    event.preventDefault()

    // let existingBeerCategory
    // const existingBeerName = currentBeers.map(beers => beers.products).flat().find(beer => beer.id === id)

    const updatedBeer = {
      name: name === '' || !name ? beer.name : name,
      style: style === '' || !style ? beer.style : style,
      country: country === '' || !country ? beer.country : country,
      category: category === '' || category === 'Valitse listasta' || !category ? beer.category : category,
    }

    updateBeer(beer.id, beer.category, updatedBeer)

    closeForm()

  }

  const resetStates = () => {
    setName('')
    setStyle('')
    setCountry('')
    setPrice('')
    setCategory('')
  }

  const closeForm = () => {
    resetStates()

    visibility(false)
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
    <FormContainer>
      <FormWrapperLarge>
        <FormClose onClick={closeForm} />
        <Form onSubmit={handleSubmit}>
          <FormH2>Päivitä hanatuote</FormH2>
          <FormH4>{beer?.name}</FormH4>
          <FormP>{beer?.style} : {beer?.country} : {beer?.category}</FormP>
          <FormH4>Nimi</FormH4>
          <FormInput
            type='text'
            id='name'
            value={name}
            onChange={handleNameChange}
          />
          <FormH4>Tyyli</FormH4>
          <FormInput
            type='text'
            id='style'
            value={style}
            onChange={handleStyleChange}
          />
          <FormH4>Maa</FormH4>
          <FormInput
            type='text'
            id='country'
            value={country}
            onChange={handleCountryChange}
          />
          <FormH4>Kategoria</FormH4>
          <FormSelect onChange={handleCategoryChange}>
            {beerCategories.map(category => <option key={category} value={category}>{category}</option>)}
          </FormSelect>
          <FormButton type='submit'>Päivitä</FormButton>
        </Form>
      </FormWrapperLarge>
    </FormContainer>
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
