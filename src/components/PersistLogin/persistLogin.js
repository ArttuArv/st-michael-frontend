import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from '../../hooks/useRefreshToken'
import useAuth from '../../hooks/useAuth'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  console.log('auth:', auth)

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      console.log('verifyRefreshToken')
      try {
        await refresh()
        console.log('refreshed')
      }
      catch (err) {
        console.error(err)
      }
      finally {
        console.log('finally')
        isMounted && setIsLoading(false)
      }
    }
    
    // console.log('persist:', persist)

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken /* && persist  */
      ? verifyRefreshToken() 
      : setIsLoading(false)

    return () => isMounted = false
  }, [])

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`)
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    // console.log(`persist: ${persist}`)
  }, [isLoading])

  return (
    <>
      {/* {!persist
        ? <Outlet />
        : isLoading
          ? <p>Loading...</p>
          : <Outlet />
      } */}
      {isLoading
        ? <p>Loading...</p>
        : <Outlet />
      }
    </>
  )
}

export default PersistLogin