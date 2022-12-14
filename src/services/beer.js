import axios from 'axios'
import userService from './user'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/beer`

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`
    }
  }
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config())
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config())
  return response.data
}

export default { create, remove, }