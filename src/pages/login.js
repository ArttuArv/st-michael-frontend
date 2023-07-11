import { Link, useNavigate, useLocation } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import LoginForm from '../components/LoginForm/loginForm'
import loginService from '../services/login'

import Notification from '../components/Notification/Notification.js'

const loginWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '0 1rem',
}

const Login = () => {
  const { setAuth } = useAuth()  

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // Handle user login
  const login = async (username, password) => {
    loginService.login({
      username, password,
    }).then(response => {
      const accessToken = response?.access

      setAuth({ 
        username, 
        password, 
        accessToken 
      })

      notify('Kirjautuminen onnistui!', 'info')
      navigate(from, { replace: true })

    }).catch(error => {
      if (!error?.response) {
        notify('Tapahtui virhe', 'alert')
      } else if (error.response.status === 401) {
        notify('Väärä salasana tai käyttäjätunnus', 'alert')
      } else if (error.response.status === 400) {
        notify('Väärä salasana tai käyttäjätunnus', 'alert')
      } else {
        notify('Tapahtui virhe', 'alert')
      }
    })
  }

  const notify = (message, type = 'info') => {
    new Notification({
      text: message,
      position: 'top-right',
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      color: type === 'info' ? '##1DB954' : '#FF4136',
    })
  }

  return (    
    <div style={loginWrapper}>       
      <LoginForm onLogin={login} />
    </div>
  )
  
}

export default Login