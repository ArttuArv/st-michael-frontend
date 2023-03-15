import axios from 'axios'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)

  return response.data
}



export default { login }