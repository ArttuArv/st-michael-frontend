import { useState } from 'react'
import styled, { keyframes } from 'styled-components';

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

const UpdateBeerForm = ({ beer, updateBeer, visibility }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  // const beerCategories = returnListOfBeerCategories(currentBeers)

  const beerCategories = [
    'Valitse listasta',
    'On Bottle',
    'On Draught',
    'Local Draughts',
    'Regular Draughts'
  ]

  const handleSubmit = (event) => {
    event.preventDefault()

    if (category === 'Valitse listasta' || !category) {
      notify('Valitse kategoria', 'alert')

      return
    }

    if (!style) {
      notify('Täytä tyyli', 'alert')

      return
    }

    if (!country) {
      notify('Täytä maa', 'alert')

      return
    }

    // let existingBeerCategory
    // const existingBeerName = currentBeers.map(beers => beers.products).flat().find(beer => beer.id === id)

    const updatedBeer = {
      name,
      style,
      country,
      category,
    }

    if (name === '' || !name) {
      setName(beer.name)
      updatedBeer.name = beer.name
    }

    console.log('updatedBeer: ', updatedBeer)
      // updatedBeer.name = existingBeerName.name    

    // existingBeerCategory = existingBeerName.category

    updateBeer(beer.id, beer.category, updatedBeer)

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

  const closeForm = () => {
    resetStates()

    visibility(false)
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
    // <>
    //   <div style = {{ marginBottom: '10px' }}>
    //     <InputFormH2>Päivitä olut</InputFormH2>
    //   </div>
    //   <div>
    //     <InputFormForm onSubmit={handleSubmit}>
    //       <InputFormItems>
    //         <InputFormLabel>Valitse olut</InputFormLabel>
    //         <InputFormSelect value={id} onChange={handleIdChange}>
    //           {currentBeers.map(beers => beers.products.map(beer => (
    //             <InputFormOption key={beer.id} value={beer.id}>{beer.name}</InputFormOption>
    //           )))}
    //         </InputFormSelect>
    //       </InputFormItems>
    //       <InputFormItems>
    //         <InputFormP>Nimi</InputFormP>
    //         <InputFormInput
    //           value={name}
    //           onChange={handleNameChange}
    //           id='style'
    //           placeholder='Jätä tyhjäksi jos haluat säilyttää nykyisen nimen'
    //         />
    //       </InputFormItems>
    //       <InputFormItems>
    //         <InputFormP>Tyyppi</InputFormP>
    //         <InputFormInput
    //           value={style}
    //           onChange={handleStyleChange}
    //           id='style'
    //           placeholder='Oluen tyyppi esim. IPA'
    //         />
    //       </InputFormItems>
    //       <InputFormItems>
    //         <InputFormP>Maa</InputFormP>
    //         <InputFormInput
    //           value={country}
    //           onChange={handleCountryChange}
    //           id='country'
    //           placeholder='Oluen kotimaa'
    //         />
    //       </InputFormItems>
    //       <InputFormItems>
    //         <InputFormLabel>Kategoria</InputFormLabel>
    //         <InputFormSelect value={category} onChange={handleCategoryChange}>
    //           {beerCategories.map(beerArea => (
    //             <InputFormOption key={beerArea} value={beerArea}>{beerArea}</InputFormOption>
    //           ))}
    //         </InputFormSelect>
    //       </InputFormItems>
    //        <InputFormButton background = 'add' id="login-button" type="submit">
    //          Päivitä
    //        </InputFormButton>
    //      </InputFormForm>
    //    </div>
    // </>
    <FormContainer>
      <FormWrapper>
        <FormClose onClick={closeForm} />
        <div>
          <FormH2>Päivitä hanatuote</FormH2>
          <FormH4>{beer?.name}</FormH4>
          <FormP>{beer?.style}</FormP>
          <FormP>{beer?.country}</FormP>
          <FormP>{beer?.category}</FormP>
        </div>
          <Form onSubmit={handleSubmit}>
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
      </FormWrapper>
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

const jitter = keyframes`
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(1.3) scaleX(1.3);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
`
const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

const FormWrapper = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 300px;
  height: 500px;
  z-index: 200;
  border: 4px solid gold;
  background-color: #A69666;
  border-radius: 15px;
  padding: 1rem;
`

const FormClose = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;  

  &:after {
    content: '\\00D7';  
    font-size: 30px; 
  }

  &:hover {
    opacity: 1;
    color: red;
    animation: ${jitter} 0.5s linear infinite;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 90%;
`

const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const FormSelect = styled.select`
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const FormButton = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: gold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: green;
    color: #fff;
  }
`

const FormH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const FormH4 = styled.h4`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`

const FormP = styled.p`
  font-size: 0.9rem;
`