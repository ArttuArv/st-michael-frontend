import axios from 'axios'
import userService from './user'
import { getBaseUrl } from '../utils/utils'

const baseUrl = `${getBaseUrl()}/csv`

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`
    }
  }
}

const upload = async (csvfile) => {
  console.log('csvfile', csvfile)

  if (csvfile) {
    const formData = new FormData()
    formData.append('csvfile', csvfile)
    const response = await axios.post(baseUrl, formData, config())
    return response.data
  }
  
}

export default { upload, }