import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue)

  const reset = () => setValue(initialValue)

  console.log(`useInput: ${value}`)

  const attributeObject = {
    value,
    onChange: (event) => setValue(event.target.value)
  }

  return [value, reset, attributeObject]
}

export default useInput