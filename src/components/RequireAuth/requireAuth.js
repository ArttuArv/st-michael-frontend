import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequireAuth = () => {
  const { auth } = useAuth()
  const location = useLocation()

 /*  console.log('Auth User: ', JSON.stringify(auth?.username))
  console.log('AUTH: ', JSON.stringify(auth)) */

  return (
    auth?.accessToken
      ? <Outlet />
      // : <Navigate to={{ pathname: '/login', state: { from: location } }} />
      : <Navigate to='/login' state = {{ from: location }} replace />
  )
}

export default RequireAuth