import { useState } from 'react'

import { 
  FormContainer,
  FormWrapperBeer,
  FormClose,
  Form,
  FormInput,
  FormSelect,
  FormButton,
  FormH2,
  FormH4,
  FormP,
} from '../UpdateFormElements'

import Notification from '../../Notification/Notification'

const UpdateBeerForm = ({ beer, updateBeer, visibility }) => {
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

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
    <FormContainer>
      <FormWrapperBeer>
        <FormClose onClick={closeForm} />
          <Form onSubmit={handleSubmit}>
            <div>
              <FormH2>Päivitä hanatuote</FormH2>
              <FormH4>{beer?.name}</FormH4>
              <FormP>{beer?.style} : {beer?.country} : {beer?.category}</FormP>
            </div>
            <FormH4>Nimi</FormH4>
            <div>
              <FormInput
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <FormH4>Tyyli</FormH4>
            <div>
              <FormInput
                type='text'
                id='style'
                value={style}
                onChange={handleStyleChange}
              />
            </div>
            <FormH4>Maa</FormH4>
            <div>
              <FormInput
                type='text'
                id='country'
                value={country}
                onChange={handleCountryChange}
              />
            </div>
            <FormH4>Kategoria</FormH4>
            <div>
              <FormSelect onChange={handleCategoryChange}>
                {beerCategories.map(category => <option key={category} value={category}>{category}</option>)}
              </FormSelect>
            </div>
            <FormButton type='submit'>Päivitä</FormButton>
          </Form>
      </FormWrapperBeer>
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
