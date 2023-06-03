import refreshService from '../services/refresh'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {

    const response = await refreshService.refresh()

    console.log('refresh response: ', response)

    setAuth(prev => {
        return { 
          ...prev, 
          accessToken: response.accessToken 
        }
    })
    return response.accessToken
  }

  return refresh
}

export default useRefreshToken