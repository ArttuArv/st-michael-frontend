import axios from 'axios'
import userService from './user'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/users`

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`
    }
  }
}

const register = async credentials => {
  const response = await axios.post(baseUrl, credentials, config(), {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  })

  return response.data
}

const update = async credentials => {
  const response = await axios.put(baseUrl, credentials, config(), {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  })
}

export default { register, update }