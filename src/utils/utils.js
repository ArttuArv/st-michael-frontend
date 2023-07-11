import React, { lazy } from "react"
import axios from 'axios';

const baseUrlProd = process.env.REACT_APP_PRODUCT_API_URI
const baseUrlTest = process.env.REACT_APP_PRODUCT_API_TEST_URI

export const axiosDefault = axios.create({
    baseURL: baseUrlTest
});

export const axiosPrivate = axios.create({
    baseURL: baseUrlTest,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

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

export const rearrangeWhiskyOrder = (whisky) => {

  const sortedWhisky = whisky.map(whisky => {
    whisky.whiskies.sort((a, b) => a.name.localeCompare(b.name))
    return whisky
  }) 

  // Sort categories Uutuudet, Highland, Islands, Campbeltown, Lowland, Irish, Japan, Speyside, Islay, Blended, Blended Malt, Single Malt, Single Grain, Grain, Rye, Other
  sortedWhisky.sort((a, b) => {
    if (a.name === 'Uutuudet')
      return -1
    if (b.name === 'Uutuudet')
      return 1

    if (a.name === 'Highland')
      return -1
    if (b.name === 'Highland')
      return 1

    if (a.name === 'Islands')
      return -1
    if (b.name === 'Islands')
      return 1

    if (a.name === 'Speyside')
      return -1
    if (b.name === 'Speyside')
      return 1

    if (a.name === 'Campbeltown')
      return -1
    if (b.name === 'Campbeltown')
      return 1

    if (a.name === 'Lowland')
      return -1
    if (b.name === 'Lowland')
      return 1

    if (a.name == 'Irish')
      return -1
    if (b.name == 'Irish')
      return 1

    if (a.name === 'Japan')
      return -1
    if (b.name === 'Japan')
      return 1
    
    if (a.name === 'USA')
      return -1
    if (b.name === 'USA')
      return 1

    if (a.name === 'Canada')
      return -1
    if (b.name === 'Canada')
      return 1

    return 0
  })
  
  return sortedWhisky
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