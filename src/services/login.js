import axios from 'axios'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/login`

const login = async credentials => {

  console.log("services/login.js: login: ", credentials)
  
  const response = await axios.post(baseUrl, credentials, 
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'withCredentials': true
      }
    }
  )

  return response.data
}



export default { login }