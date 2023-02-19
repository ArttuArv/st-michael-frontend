import { useState } from 'react'
import { 
  LoginFormContainer,
  LoginFormH2,
  LoginFormP,
  LoginFormItemWrapper,
  LoginFormForm,
  LoginFormInputWrapper,
  LoginFormInput,
  LoginFormButton
} from './LoginFormElements'
import userService from '../../services/user'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username, password)
  }

  return (
    <LoginFormContainer>
      <LoginFormH2>Kirjaudu Sisään</LoginFormH2>
      <LoginFormItemWrapper> 
        <LoginFormForm onSubmit={handleSubmit}>
          <LoginFormInputWrapper>
            <LoginFormP>Käyttäjätunnus</LoginFormP>
            <LoginFormInput
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              id='username'
            />
          </LoginFormInputWrapper>
          <LoginFormInputWrapper>
            <LoginFormP>Salasana</LoginFormP>
            <LoginFormInput
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              id="password"
            />
          </LoginFormInputWrapper>
          <LoginFormInputWrapper>
            <LoginFormButton id="login-button" type="submit">
              Login
            </LoginFormButton>
          </LoginFormInputWrapper>
        </LoginFormForm>
      </LoginFormItemWrapper>
    </LoginFormContainer>
  )
}

export default LoginForm