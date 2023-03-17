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
    <div>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Lisää olut</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormP>Nimi</InputFormP>
            <InputFormInput
              value={name}
              onChange={handleNameChange}
              id='name'
              placeholder='Oluen nimi'
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
             Lisää
           </InputFormButton>
         </InputFormForm>
       </div>
     </div>
   )
}

export default NewBeerForm