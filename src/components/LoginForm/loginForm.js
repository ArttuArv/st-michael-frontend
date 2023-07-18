import { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

import useInput from '../../hooks/useInput'
import useToggle from '../../hooks/useToggle'

import './loginFormStyles.css'

const LoginForm = ({ onLogin }) => {
  const { setAuth, persist, setPersist } = useContext(AuthContext)

  const userRef = useRef()
  const errRef = useRef()

  const [user, resetUser, userAttributes] = useInput('user', '')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [check, toggleCheck] = useToggle('persist', false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])  

  const handleSubmit = (event) => {
    event.preventDefault()
    
    onLogin(user, password)
    
    clearStates()
  }

  const clearStates = () => {
    // setUser('')
    //resetUser()
    setPassword('')
  }

  return (
    <>
      <section className='login-form-container'>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        <h2 style={{ textAlign: 'center' }}>Kirjaudu</h2>
        <form className= 'login-form'onSubmit={handleSubmit}>
          <label className='login-form-label' htmlFor='username'>Käyttäjänimi:</label>
          <input
            className='login-form-input'
            type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            {...userAttributes}
            required
          />

          <label htmlFor='password'>Salasana:</label>
          <input
            className='login-form-input'
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button className='login-form-button'>Kirjaudu</button>
          <div className='persistCheck'>
            <input
              type='checkbox'
              id='persist'
              onChange={toggleCheck}
              checked={check}
            />
            <label htmlFor='persist'>Luota tähän laitteeseen</label>
          </div>
        </form>   
      </section>
    </>
  )
}

export default LoginForm