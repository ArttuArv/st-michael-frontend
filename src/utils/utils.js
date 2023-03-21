import React, { lazy } from "react"

const baseUrl = process.env.REACT_APP_PRODUCT_API_URI
const baseUrlTest = process.env.REACT_APP_PRODUCT_API_TEST_URI

export const getBaseUrl = () => baseUrl

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

export function formatDateTimeToEuropean(liveEventObject) {

  const formatter = new Intl.DateTimeFormat('fi', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const date = formatter.format(new Date(liveEventObject.date))

  const dateArray = date.split('.')

  const year = dateArray[2]
  const month = dateArray[1] < 10 ? dateArray[1].replace(/^0+/, '') : dateArray[1]
  const day = dateArray[0] < 10 ? dateArray[0].replace(/^0+/, '') : dateArray[0]

  liveEventObject.date = `${day}.${month}.${year}`
  liveEventObject.time = liveEventObject.time.replace(/:/g, '.')

  return liveEventObject
}