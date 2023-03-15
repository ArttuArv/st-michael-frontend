import axios from 'axios'
import userService from './user'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/openinghours`

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`
    }
  }
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config())
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config())
  return response.data
}

const remove = async (id) => {
  console.log('config: ', config())
  const response = await axios.delete(`${baseUrl}/${id}`, config())
  return response.data
}

export default { getAll, create, update, remove, }