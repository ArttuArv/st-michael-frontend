
let token = null

const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY

const setUser = (user) => {
  window.localStorage.setItem(
    STORAGE_KEY, JSON.stringify(user)
  )
  
  token = user.access
}

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    token = user.token

    return user
  }

  return null
}

const clearUser = () => {
  localStorage.clear()
  token = null
}

const getToken = () => {
  if (token === null) {
    const user = getUser()
    if (user) {
      token = user.access
    }
  }

  return token
}

export default { setUser, getUser, clearUser, getToken }