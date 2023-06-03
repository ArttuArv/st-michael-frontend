import axios from 'axios'
import userService from './user'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/refresh`

// axios.defaults.withCredentials = true

const refresh = async () => {

  const response = await axios.get(baseUrl, {
    withCredentials: true,
  })

  return response.data
}

export default { refresh }