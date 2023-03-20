import React, { lazy } from "react"

const baseUrl = process.env.REACT_APP_PRODUCT_API_URI
const baseUrlTest = process.env.REACT_APP_PRODUCT_API_TEST_URI

export const getBaseUrl = () => baseUrlTest

export const lazyLoad = (path, namedExport) => {

  console.log('lazyLoad: ', path, namedExport)

  return lazy(() => {
    const promise = import(`${path}`)
    if (namedExport == null) {
      return promise
    } else {
      return promise.then(module => ({ default: module[namedExport] }))
    }
  })
}

export const checkIfFileIsCsv = (file) => {
  if (file.type === 'text/csv') {
    return true
  }
}

export const rearrangeBeerOrder = (beer) => {
  const sortedBeers = beer.map(beer => {
    beer.products.sort((a, b) => a.name.localeCompare(b.name))
    return beer
  })

  // Sort categories Seasonal Draughts, Seasonal Bottles, Regular Draughts, Regular Bottles
  sortedBeers.sort((a, b) => {
    if (a.name === 'Seasonal Draughts')
      return -1
    if (b.name === 'Seasonal Draughts')
      return 1
    if (a.name === 'Seasonal Bottles')
      return -1
    if (b.name === 'Seasonal Bottles')
      return 1
    if (a.name === 'Regular Draughts')
      return -1
    if (b.name === 'Regular Draughts')
      return 1
    if (a.name === 'Regular Bottles')
      return -1
    if (b.name === 'Regular Bottles')
      return 1
    return 0
  })
  return sortedBeers
}