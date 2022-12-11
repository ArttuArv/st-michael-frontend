import axios from 'axios'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/categories`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, }