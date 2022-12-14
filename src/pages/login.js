import { useState, useEffect, useRef } from 'react'

import Togglable from "../components/Togglable"
import Notification from "../components/Notification"
import LoginForm from "../components/LoginForm"
import NewOpeningHoursForm from "../components/AdminPageForms/NewOpeningHoursForm"
import UpdateOpeningHoursForm from "../components/AdminPageForms/UpdateOpeningHoursForm"
import NewBeerForm from "../components/AdminPageForms/NewBeerForm"
import NewWhiskyForm from "../components/AdminPageForms/NewWhiskyForm"

import loginService from '../services/login'
import userService from '../services/user'
import beersService from '../services/beers'
import beerService from '../services/beer'
import whiskiesService from '../services/whiskies'
import whiskyService from '../services/whisky'
import openingHoursService from '../services/openinghours'
import whiskyCsvService from '../services/whiskyCsv'

import { checkIfFileIsCsv } from '../utils/utils'

import { 
  LoginPageContainer,
  LoginPageH1,
  LoginPageH3,
  LoginPageP,
  LoginPageGrid,
  LoginPageGridItem,
  LoginPageButton,
  LoginPageInputForm,
  LoginPageRemoveButton,
  LoginPageWrapper
} from '../components/LoginPageStyledComponents/LoginPageElements'

const loginWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
}

const OpeningHoursList = ({ openingHour, removeOpeningHour }) => {
  return (
    <div key={openingHour.id}>
      <LoginPageP><b>{openingHour.day}</b></LoginPageP>
      <LoginPageP>{openingHour.openinghours}</LoginPageP>
      <LoginPageRemoveButton background = 'light' onClick = {() => removeOpeningHour(openingHour.id)}>
        Poista
      </LoginPageRemoveButton>
    </div>
  )
}

const ItemList = ({ product, remove }) => {
  const [showAll, setShowAll] = useState(false)

  if (showAll) {
    return(
      <div style = {{ marginBottom: '25px' }}>
        <FullItemList product={product} remove={remove} setShowAll={setShowAll} />
        <LoginPageRemoveButton background = 'light' onClick = {() => remove(product.id, product)}>Poista</LoginPageRemoveButton>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
    )
  }

  return (
    <div style = {{ marginBottom: '25px' }} key={product.id}>
      <LoginPageP><b>{product.name}</b></LoginPageP>
      <div>     
        <LoginPageRemoveButton background = 'light' onClick = {() => remove(product.id, product)}>Poista</LoginPageRemoveButton>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>N??yt?? kaikki</LoginPageButton>
      </div>      
    </div>
  )
}

const FullItemList = ({ product, remove }) => {
  return (
    <div style = {{ marginBottom: '25px' }} key={product.id}>
      <LoginPageP><b>{product.name}</b></LoginPageP>
      <LoginPageP><b>{product.price}</b></LoginPageP>
      <LoginPageP><b>{product?.area}</b></LoginPageP>
      <LoginPageP><b>{product?.style}</b></LoginPageP>
      <LoginPageP><b>{product?.country}</b></LoginPageP>
    </div>
  )
}

const Login = () => {
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)
  const [beers, setBeers] = useState([])
  const [whiskies, setWhiskies] = useState([])
  const [openingHours, setOpeningHours] = useState([])
  const [file, setFile] = useState(null)

  const beerFormRef = useRef()
  const whiskyFormRef = useRef()
  const openingHoursFormRef = useRef()
  const openingHoursUpdateRef = useRef()

  // Get logged in user from localStorage
  useEffect(() => {
    const userFromStorage = userService.getUser()
    if (userFromStorage) {
      setUser(userFromStorage)
    }
  }, [])

  // Handle user login
  const login = async (username, password) => {
    loginService.login({
      username, password,
    }).then(user => {
      setUser(user)
      userService.setUser(user)
      notify(`Login succesful! Welcome ${user.name}!`)
    }).catch(() => {
      notify('Wrong credentials', 'alert')
    })
  }

  // Handle user logout
  const logout = () => {
    setUser(null)
    userService.clearUser()
  }

  // Get all beers from db  
  useEffect(() => {
    beersService.getAll()
      .then(beers => {
        setBeers(beers);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  // Get all whiskies from db
  useEffect(() => {
    whiskiesService.getAll()
      .then(whiskies => {
        setWhiskies(whiskies)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Get all opening hours from db
  useEffect(() => {
    openingHoursService.getAll()
      .then(openingHours => {
        setOpeningHours(openingHours)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Create new beer
  const createBeer = (newBeer) => {
    beerService.create(newBeer).then(returnedBeer => {
      setBeers(beers.map(beer => {
        if (beer.name === newBeer.category) {
          beer.products.push(returnedBeer)
        }
        return beer
      }))
      notify(`Lis??tty ${returnedBeer.name}`)
      beerFormRef.current.toggleVisibility()
    }).catch(exception => { 
      notify(exception.response.data.error, 'alert')
      console.log('Exception: ', exception)
    })
  }

  // Create new whisky
  const createWhisky = (newWhisky) => {
    whiskyService.create(newWhisky).then(returnedWhisky => {
      setWhiskies(whiskies.map(whisky => {
        if (whisky.name === newWhisky.area) {
          whisky.whiskies.push(returnedWhisky)
        }
        return whisky
      }))
      notify(`Lis??tty ${returnedWhisky.name}!`)
      whiskyFormRef.current.toggleVisibility()
    }).catch(exception => {
      notify('Tapahtui virhe', 'alert')
      console.log('Exception: ', exception)
    })
  }

  // Create new opening hours
  const createOpeningHours = (newOpeningHours) => {
    openingHoursService
      .create(newOpeningHours)
      .then(returnedOpeningHours => {
        setOpeningHours(openingHours.concat(returnedOpeningHours))
        notify(`Lis??tty ${returnedOpeningHours.day} ${returnedOpeningHours.openinghours}`)
        openingHoursFormRef.current.toggleVisibility()
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Upload whiskies from csv file
  const uploadWhiskies = (file) => {
    if (file === null) {
      notify('Valitse tiedosto', 'alert')
      return
    }
    
    if (checkIfFileIsCsv(file)) {

      whiskyCsvService
        .upload(file)
        .then(returnedWhiskies => {
          console.log('old whiskies: ', whiskies)
          // iterate through old whiskies and add new whiskies to them
          setWhiskies(whiskies.map(whisky => {
            if (whisky.name === returnedWhiskies[0].area) {
              whisky.whiskies = whisky.whiskies.concat(returnedWhiskies)
            }
            return whisky
          }))  
          
          notify(`Ladattu ${returnedWhiskies.length} tuotetta! P??ivit?? selain heten kuluttua!`)
          setFile(() => null)

        }).catch(exception => {

          notify(`${exception}`, 'alert')
          console.log('Exception: ', exception)

        })
    } else {
      notify(`V????r?? tiedostomuoto!`, 'alert')
    }    
  }

  // Remove beer from db
  const removeBeer = (id, beerCategory) => {

    const ok = window.confirm(`Poistetaanko ${beerCategory.name} ?`)

    if (!ok) {
      return
    }
    
    // Find the correct sub array from beers
    const filteredBeers = beers.find(beer => beer.products.find(product => product.category === beerCategory.category))
    
    // Remove old entry from array
    const newBeersCategory = filteredBeers.products.filter(beer => beer.id !== id)

    const updatedBeers = {
      name: filteredBeers.name,
      products: newBeersCategory,
      id: filteredBeers.id,
    }

    beerService.remove(id).then(() => {
      setBeers(beers.map(beer => beer.id === updatedBeers.id ? updatedBeers : beer))
      notify(`${beerCategory.name} poistettu!`)
    }).catch(exception => {
      notify(`${exception.response.data.error}`, 'alert')
      console.log('Exception: ', exception)
    })
  }

  // Remove whisky from db
  const removeWhisky = (id, whiskyArea ) => {

    const ok = window.confirm(`Poistetaanko ${whiskyArea.name} ?`)

    if (!ok) {
      return
    }

    // Find the correct sub array from whiskies
    const filteredWhiskies = whiskies.find(whisky => whisky.whiskies.find(product => product.area === whiskyArea.area))

    // Remove old entry from array
    const newWhiskiesArea = filteredWhiskies.whiskies.filter(whisky => whisky.id !== id)

    const updatedWhiskies = {
      name: filteredWhiskies.name,
      whiskies: newWhiskiesArea,
      id: filteredWhiskies.id,
    }

    whiskyService.remove(id).then(() => {
      setWhiskies(whiskies.map(whisky => whisky.id === updatedWhiskies.id ? updatedWhiskies : whisky))
      notify(`${whiskyArea.name} poistettu!`)
    }).catch(exception => {
      notify(`${exception.response.data.error}`, 'alert')
      console.log('Exception: ', exception)
    })
  }

  // Remove opening hours from db
  const removeOpeningHours = (id) => {
    const toRemove = openingHours.find(openingHour => openingHour.id === id)

    const ok = window.confirm(`Poistetaanko ${toRemove.day} ${toRemove.openinghours}?`)

    if (!ok) {
      return
    }
    
    openingHoursService.remove(id).then(() => {
      setOpeningHours(openingHours.filter(openingHours => openingHours.id !== id))
      notify(`${toRemove.day} ${toRemove.openinghours} poistettiin onnistuneesti!`)      
    }).catch(exception => {
      notify('Tapahtui virhe', 'alert')
    })
  }

  // Update opening hours
  const updateOpeningHours = (id, newOpeningHours) => {
    openingHoursService
      .update(id, newOpeningHours)
      .then(returnedOpeningHours => {
        setOpeningHours(openingHours.map(openingHours => openingHours.id !== id ? openingHours : returnedOpeningHours))
        notify(`Muokattiin ${returnedOpeningHours.day} ${returnedOpeningHours.openinghours}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  const notify = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  // Alphabetically sorted beers
  const sortedBeers = beers.map(beer => {
    beer.products.sort((a, b) => a.name.localeCompare(b.name))
    return beer
  })
  
  const sortedWhiskies = whiskies.map(whisky => {
    whisky.whiskies.sort((a, b) => a.name.localeCompare(b.name))
    return whisky
  })

  if (user === null) {
    return (
      <div style={loginWrapper}>
        <div>
          <Notification notification={notification} />
          <LoginForm onLogin={login} />
        </div>
      </div>
    )
  }

  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <Notification notification={notification} />        
        <LoginPageP>{user.name} logged in</LoginPageP>
        <LoginPageButton background = 'dark' onClick={logout}>Logout</LoginPageButton>
      </LoginPageWrapper>
      <div className="csv-file-upload">
        <LoginPageInputForm>
          <LoginPageH1>Lataa Excelin csv-tiedosto</LoginPageH1>
          <input type="file" accept='.csv' lang='fin' onChange={handleFileChange} />
          <LoginPageButton background = 'light' onClick={() => uploadWhiskies(file)}>Upload</LoginPageButton>
        </LoginPageInputForm>
      </div>
      <LoginPageGrid>
        <div>
          <LoginPageInputForm>
            <LoginPageH1>Aukioloajat</LoginPageH1>
            <Togglable buttonLabel='Uusi aika' ref = {openingHoursFormRef} >
              <NewOpeningHoursForm createNewHours = {createOpeningHours} />
            </Togglable>
            <Togglable buttonLabel='P??ivit?? aika' ref = {openingHoursUpdateRef} >
              <UpdateOpeningHoursForm updateOpeningHours = {updateOpeningHours} />
            </Togglable>
          </LoginPageInputForm>
          <LoginPageGridItem>
            {openingHours.map(openingHours =>
              <OpeningHoursList 
                key = {openingHours.id} 
                openingHour = {openingHours} 
                removeOpeningHour = {removeOpeningHours} 
              />
            )}
          </LoginPageGridItem>
        </div>      
        <div>
          <LoginPageInputForm>
            <div style = {{justifyContent: 'center'}}>
              <LoginPageH1>Hanatuotteet</LoginPageH1>
            </div>
            <Togglable buttonLabel='Uusi olut' ref = {beerFormRef}>
              <NewBeerForm createNewBeer={createBeer} />
            </Togglable>
          </LoginPageInputForm>
          <LoginPageGridItem>
            {sortedBeers.map(beer =>
              <div style = {{ paddingTop: '10px' }} key={beer.id}>
                <LoginPageH3>{beer.name}</LoginPageH3>
                {beer.products.map(product =>
                  <ItemList key = {product.id} product = {product} remove = {removeBeer} />
                )}
              </div>
            )}
          </LoginPageGridItem>
        </div>
        <div>
          <LoginPageInputForm>
            <LoginPageH1>Viskilista</LoginPageH1>
            <Togglable buttonLabel='Uusi viski' ref = {whiskyFormRef} >
              <NewWhiskyForm createNewWhisky = {createWhisky} />
            </Togglable>
          </LoginPageInputForm>
          <LoginPageGridItem>
            {sortedWhiskies.map(whisky =>
              <div key={whisky.name}>
                <LoginPageH3>{whisky.name}</LoginPageH3>
                {whisky.whiskies.map(product =>
                  <ItemList key = {product.id} product = {product} remove = {removeWhisky} />
                )}
              </div>
              )}
          </LoginPageGridItem>          
        </div>
      </LoginPageGrid>
    </LoginPageContainer>
  )
}

export default Login