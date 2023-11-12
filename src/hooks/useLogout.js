import useAuth from "./useAuth"
import { axiosDefault } from '../utils/utils'

const useLogout = () => {
  const { setAuth } = useAuth()

  const logout = async () => {
    setAuth({})

    try {
      const response = await axiosDefault.get('/logout', {
        withCredentials: true
      })
    } catch (err) {
      console.error(err)
    }
  }

  return logout
}

export default useLogout
