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

const NewWhiskyForm = ({ createNewWhisky, currentWhiskies }) => {
  const [name, setName] = useState('')
  const [area, setArea] = useState('')
  const [price, setPrice] = useState('')

  const whiskyAreas = returnListOfWhiskyAreas(currentWhiskies)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newWhisky = {
      name,
      area,
      price,
    }

    if (area === 'Valitse listasta' || !area) {
      alert('Valitse alue')
    } else {

      createNewWhisky(newWhisky, area)

      // Nollataan syöttökentät
      resetStates()
    }
  }

  const resetStates = () => {
    setName('')
    setArea('')
    setPrice('')
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

  return (
    <div>
      <div style = {{ marginBottom: '10px' }}>
        <InputFormH2>Lisää viski</InputFormH2>
      </div>
      <div>
        <InputFormForm onSubmit={handleSubmit}>
          <InputFormItems>
            <InputFormP>Nimi</InputFormP>
            <InputFormInput
              value={name}
              onChange={handleNameChange}
              id='name'
              placeholder='Viskin nimi'
            />
          </InputFormItems>
          <InputFormItems>
            <InputFormLabel>Alue</InputFormLabel>
            <InputFormSelect value={area} onChange={handleAreaChange}>
              {whiskyAreas.map((area) => (
                <InputFormOption key={area} value={area}>{area}</InputFormOption>
              ))}
            </InputFormSelect>
          </InputFormItems>
          <InputFormItems>
            <InputFormP>Hinta</InputFormP>
            <InputFormInput
              value={price}
              onChange={handlePriceChange}
              id='price'
              placeholder='Hinta'
            />
          </InputFormItems>
          <div>
            <InputFormButton background = 'add' id='submit-button' type='submit'>Lisää</InputFormButton>
          </div>
        </InputFormForm>
      </div>
    </div>
  )
}

export default NewWhiskyForm

function returnListOfWhiskyAreas(currentWhiskies) {
  let whiskyAreas = currentWhiskies.map((whisky) => whisky.name)
  const uutuudetExists = whiskyAreas.find(areaName => areaName === 'Uutuudet')

  if (!uutuudetExists) {
    whiskyAreas = [
      'Valitse listasta',
      ...whiskyAreas,
      'Uutuudet'
    ]
  } else {
    whiskyAreas = [
      'Valitse listasta',
      ...whiskyAreas
    ]
  }
  return whiskyAreas
}
