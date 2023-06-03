import axios from 'axios'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials, 
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'withCredentials': true,
        withCredentials: true,
        Hello: 'Hello from login.js'
      }
    }
    // {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'withCredentials': true
    //   }
    // }
  )

  return response.data
}



export default { login }