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