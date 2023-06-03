import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequireAuth = () => {
  const { auth } = useAuth()
  const location = useLocation()

  return (
    auth?.username
      ? <Outlet />
      : <Navigate to={{ pathname: '/login', state: { from: location } }} />
      // <Navigate to='/login' state = {{ from: location }} replace />
  )
}

export default RequireAuth