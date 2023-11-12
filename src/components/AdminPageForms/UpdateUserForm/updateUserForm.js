import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import useLocalStorage from '../../../hooks/useLocalStorage'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

import Notification from '../../Notification/Notification'

import '../NewUserForm/newUserForm.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const updateUserForm = () => {

  const errRef = useRef()
  
  const [user, setUser] = useLocalStorage('user', '')
  const [validName, setValidName] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [matchPassword, setMatchPassword] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')

  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const result = USER_REGEX.test(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password)
    setValidPassword(result)
    const match = password === matchPassword
    setValidMatch(match)
  }, [password, matchPassword])

  useEffect(() => {
    setErrMsg('')
  }, [user, password, matchPassword])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const v1 = USER_REGEX.test(user)
    const v2 = PASSWORD_REGEX.test(password)

    console.log('Hello')

    if (!v2) {
      setErrMsg('Virheellinen salasana.')
      return
    }

    const credentials = {
      username: user,
      password: password
    }

    try {
      axiosPrivate.put('users', credentials)
    
      clearStates()

      notify('Salasana päivitetty')


    } catch (err) {

      if (!err?.response) {
        setErrMsg('Ei yhteyttä palvelimeen');
        notify('Ei yhteyttä palvelimeen', 'alert')
      } else {
        setErrMsg('Päivitys epäonnistui')
        notify('Päivitys epäonnistui', 'alert')
      }

      errRef.current.focus();
    }
  }

  const clearStates = () => {
    setUser('')
    setPassword('')
    setMatchPassword('')

    setValidPassword(false)
    setValidMatch(false)
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
    <>
      <section className='new-user-form-container'>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
        <h2>Päivitä salasana</h2>
        <form className='new-user-form' onSubmit={handleSubmit}>
          <label
            className='new-user-label'
            htmlFor="password">
            Salasana:
            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
          </label>
          <input className='new-user-input'
            type="password"
            id="update_password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8-24 merkkiä.<br />
            Täytyy sisältää isoja ja pieniä kirjaimia, numero ja erikoismerkki.<br />
            Hyväksytyt erikoismerkit: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>

          <label
            className='new-user-label'
            htmlFor="confirm_pwd">
            Vahvista salasana:
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
          </label>
          <input className='new-user-input'
            type="password"
            id="update_confirm_pwd"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Salasanojen täytyy täsmätä.
          </p>

          <button
            className={`new-user-button ${validPassword && validMatch ? 'pushable' : ''}`}
            disabled={!validPassword || !validMatch ? true : false}>
            Päivitä salasana
          </button>
        </form>

      </section >

    </>
  )
}

export default updateUserForm