import { useState, useEffect, useRef } from 'react'

import Togglable from "../components/Togglable"
import LoginForm from "../components/LoginForm"
import NewOpeningHoursForm from "../components/AdminPageForms/NewOpeningHoursForm"
import UpdateOpeningHoursForm from "../components/AdminPageForms/UpdateOpeningHoursForm"
import NewBeerForm from "../components/AdminPageForms/NewBeerForm"
import UpdateBeerForm from "../components/AdminPageForms/UpdateBeerForm"
import NewWhiskyForm from "../components/AdminPageForms/NewWhiskyForm"
import UpdateWhiskyForm from "../components/AdminPageForms/UpdateWhiskyForm"
import NewLiveMusicForm from "../components/AdminPageForms/NewLiveMusicForm"
import UpdateLiveMusicForm from "../components/AdminPageForms/UpdateLiveMusicForm"

import Modal from "../components/AdminPageForms/Modal/modal"

import loginService from '../services/login'
import userService from '../services/user'
import beersService from '../services/beers'
import beerService from '../services/beer'
import whiskiesService from '../services/whiskies'
import whiskyService from '../services/whisky'
import openingHoursService from '../services/openinghours'
import whiskyCsvService from '../services/whiskyCsv'
import liveMusicService from '../services/liveMusic'


import { checkIfFileIsCsv } from '../utils/utils'

import Notification from '../components/Notification/Notification.js'

import {
  LoginPageContainer,
  LoginPageH1,
  LoginPageH3,
  LoginPageP,
  LoginPageGrid,
  LoginPageGridItem,
  LoginPageButton,
  LoginPageInputFormWrapper,
  LoginPageRemoveButton,
  LoginPageHideButton,
  LoginPageWrapper,
  LoginPageWhiskyViewContainer,
  LoginPageWhiskyViewList,
  LoginPageWhiskyViewUl,
  LoginPageWhiskyViewLi,
  LoginPageWhiskyRemoveButton,
  LoginPageWhiskyUpdateButton,
  LoginPageShortListGrid,
  LoginPageShortListGridItem,
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
      <LoginPageRemoveButton onClick = {() => removeOpeningHour(openingHour.id)}>
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
        <LoginPageRemoveButton onClick = {() => remove(product.id, product)}>Poista</LoginPageRemoveButton>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
    )
  }

  return (
    <div style = {{ marginBottom: '25px' }} key={product.id}>
      <LoginPageP><b>{product.name}</b></LoginPageP>
      <div>
        <LoginPageRemoveButton onClick = {() => remove(product.id, product)}>Poista</LoginPageRemoveButton>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Näytä kaikki</LoginPageButton>
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

const ProductCategoryList = ({ productList, removeProduct }) => {
  const [showAll, setShowAll] = useState(false)

  // if productList contains whiskies instead of products, change the whiskies to products
  if (productList.whiskies)
    productList.products = productList.whiskies

  // Goes to top of the page when showAll is set to false
  useEffect(() => {
    if (!showAll) {
      window.scrollTo(0, 0)
    }
  }, [showAll])

  if (showAll) {
    return(
      <>
        <LoginPageH3 fontsize = 'large' >{productList.name}</LoginPageH3>
        <div style = {{ marginBottom: '25px' }}>
          <LoginPageHideButton onClick = {() => setShowAll(false)}>Piilota</LoginPageHideButton>
          {productList.products.map(product =>
            <ItemList key = {product.id} product = {product} remove = {removeProduct} />
          )}
          <LoginPageHideButton onClick = {() => setShowAll(false)}>Piilota</LoginPageHideButton>
        </div>
      </>
    )
  }

  return (
    <>
      <LoginPageH3 fontsize = 'small' >{productList.name}</LoginPageH3>
      <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Avaa lista</LoginPageButton>
    </>
  )
}

const OpeningHoursView = ({ openingHoursList, removeOpeningHours, updateOpeningHours }) => {
  const [showAll, setShowAll] = useState(false)

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize = 'small' >Näytä kaikki aukioloajat</LoginPageH3>
          <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <LoginPageWhiskyViewContainer>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginPageH3 fontsize = 'small' >Aukioloajat</LoginPageH3>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
      <LoginPageShortListGrid>
        {openingHoursList.map(openingHour =>
          <LoginPageShortListGridItem key={openingHour.id}>
            <OpeningHoursListItem openingHour={openingHour} remove={removeOpeningHours} update={updateOpeningHours} />
          </LoginPageShortListGridItem>
        )}
      </LoginPageShortListGrid>      
    </LoginPageWhiskyViewContainer>
  )
}

const OpeningHoursListItem = ({ openingHour, remove, update }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <LoginPageWhiskyViewLi>{openingHour.day}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyViewLi>{openingHour.openinghours}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyUpdateButton onClick={toggleVisibility}>Päivitä</LoginPageWhiskyUpdateButton>
      <Modal visible={visible}>
        <UpdateOpeningHoursForm openingHours = {openingHour} visibility={toggleVisibility} updateOpeningHours = {update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(openingHour.id, openingHour)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )
}

const BeerView = ({ beerList, removeBeer, updateBeer }) => {
  const [showAll, setShowAll] = useState(false)

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize = 'small' >Näytä kaikki hanatuotteet</LoginPageH3>
          <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <LoginPageWhiskyViewContainer>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginPageH3 fontsize = 'small' >Hanatuotteet</LoginPageH3>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
      {beerList.map(products => 
        <div key = {products.id}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LoginPageH3 style={{marginTop: '20px'}}>{products.name}</LoginPageH3>
          </div>
          <LoginPageWhiskyViewUl>
            {products.products.map(beer =>
              <LoginPageWhiskyViewList key={beer.id}>
                <BeerListItem product={beer} remove={removeBeer} update={updateBeer} />
              </LoginPageWhiskyViewList>
            )}
          </LoginPageWhiskyViewUl>
        </div>
      )}
    </LoginPageWhiskyViewContainer>
  )
}

const BeerListItem = ({ product, remove, update }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <LoginPageWhiskyViewLi>{product.name}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyUpdateButton onClick={toggleVisibility}>Päivitä</LoginPageWhiskyUpdateButton>
      <Modal visible={visible}>
        <UpdateBeerForm beer = {product} visibility={toggleVisibility} updateBeer = {update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(product.id, product)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )

}

const WhiskyView = ({ whiskyList, removeWhisky, updateWhisky }) => {
  const [showAll, setShowAll] = useState(false)

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize = 'small' >Näytä kaikki viskit</LoginPageH3>
          <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <LoginPageWhiskyViewContainer>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginPageH3 fontsize = 'small' >ViskiLista</LoginPageH3>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
      {whiskyList.map(whiskies => 
        <div key = {whiskies.name}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LoginPageH3 style={{marginTop: '20px'}}>{whiskies.name}</LoginPageH3>
          </div>
          <LoginPageWhiskyViewUl>
            {whiskies.whiskies.map(whisky =>
              <LoginPageWhiskyViewList key={whisky.id}>
                <WhiskyListItem product={whisky} remove={removeWhisky} update={updateWhisky} />
              </LoginPageWhiskyViewList>
            )}
          </LoginPageWhiskyViewUl>
        </div>
      )}            
    </LoginPageWhiskyViewContainer>
  )
}

const WhiskyListItem = ({ product, remove, update }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <LoginPageWhiskyViewLi>{product.name}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyUpdateButton onClick={toggleVisibility}>Päivitä</LoginPageWhiskyUpdateButton>
      <Modal visible={visible}>
        <UpdateWhiskyForm whiskyToUpdate={product} visibility={toggleVisibility} updateWhisky={update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(product.id, product)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )
}

const LiveMusicView = ({ liveMusicList, removeLiveMusic, updateLiveMusic }) => {
  const [showAll, setShowAll] = useState(false)

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize = 'small' >Näytä kaikki live-tapahtumat</LoginPageH3>
          <LoginPageButton background = 'light' onClick = {() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <LoginPageWhiskyViewContainer>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginPageH3 fontsize = 'small' >Live-tapahtumat</LoginPageH3>
        <LoginPageButton background = 'light' onClick = {() => setShowAll(false)}>Piilota</LoginPageButton>
      </div>
      <LoginPageShortListGrid>
        {liveMusicList.map(liveMusic =>
          <LoginPageShortListGridItem key={liveMusic.id}>
            <LiveMusicListItem livemusic={liveMusic} remove={removeLiveMusic} update={updateLiveMusic} />
          </LoginPageShortListGridItem>
        )}
       </LoginPageShortListGrid>
    </LoginPageWhiskyViewContainer>
  )
}

const LiveMusicListItem = ({ livemusic, remove, update }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <LoginPageWhiskyViewLi>{livemusic.name}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyUpdateButton onClick={toggleVisibility}>Päivitä</LoginPageWhiskyUpdateButton>
      <Modal visible={visible}>
        <UpdateLiveMusicForm liveMusicToUpdate={livemusic} visibility={toggleVisibility} updateLiveMusic={update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(livemusic.id, livemusic)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )
}

const Login = () => {
  const [user, setUser] = useState(null)
  const [beers, setBeers] = useState([])
  const [whiskies, setWhiskies] = useState([])
  const [openingHours, setOpeningHours] = useState([])
  const [file, setFile] = useState(null)
  const [liveMusic, setLiveMusic] = useState([])

  const beerFormRef = useRef()
  const whiskyFormRef = useRef()
  const openingHoursFormRef = useRef()
  const openingHoursUpdateRef = useRef()
  const beerUpdateRef = useRef()  
  const liveMusicFormRef = useRef()

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
      notify('Väärä salasana tai käyttäjätunnus', 'alert')
    })
  }

  // Handle user logout
  const logout = () => {
    setUser(null)
    userService.clearUser()
    notify('Logout succesful! See you soon!')
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

  // Get all live music events from db
  useEffect(() => {
    liveMusicService.getAll()
      .then(liveMusic => {
        setLiveMusic(liveMusic)
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
      notify(`Lisätty ${returnedBeer.name}`)
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
      notify(`Lisätty ${returnedWhisky.name}!`)
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
        notify(`Lisätty ${returnedOpeningHours.day} ${returnedOpeningHours.openinghours}`)
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

          notify(`Ladattu ${returnedWhiskies.length} tuotetta! Päivitä selain heten kuluttua!`)
          setFile(() => null)

        }).catch(exception => {

          notify(`${exception}`, 'alert')
          console.log('Exception: ', exception)

        })
    } else {
      notify(`Väärä tiedostomuoto!`, 'alert')
    }
  }

  // Create new live music event
  const createLiveMusic = (newLiveMusic) => {
    liveMusicService
      .create(newLiveMusic)
      .then(returnedLiveMusic => {
        setLiveMusic(liveMusic.concat(returnedLiveMusic))
        notify(`Lisätty ${returnedLiveMusic.name}`)
        liveMusicFormRef.current.toggleVisibility()
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
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
  const removeWhisky = (id, whisky) => {

    const ok = window.confirm(`Poistetaanko ${whisky.name} ?`)

    if (!ok) {
      return
    }

    // Find the correct sub array from whiskies
    const filteredWhiskies = whiskies.find(whiskyArea => whiskyArea.whiskies.find(product => product.name === whisky.name))

    // Remove old entry from array
    const newWhiskiesArea = filteredWhiskies.whiskies.filter(whisky => whisky.id !== id)

    const updatedWhiskies = {
      name: filteredWhiskies.name,
      whiskies: newWhiskiesArea,
      id: filteredWhiskies.id,
    }

    whiskyService.remove(id).then(() => {
      setWhiskies(whiskies.map(whisky => whisky.id === updatedWhiskies.id ? updatedWhiskies : whisky))
      notify(`${whisky.name} poistettu!`)
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

  // Remove live music event from db
  const removeLiveMusic = (id) => {
    const toRemove = liveMusic.find(liveMusic => liveMusic.id === id)

    const ok = window.confirm(`Poistetaanko ${toRemove.name}?`)

    if (!ok) return

    liveMusicService.remove(id).then(() => {
      setLiveMusic(liveMusic.filter(liveMusic => liveMusic.id !== id))
      notify(`${toRemove.name} poistettiin onnistuneesti!`)
    }).catch(exception => {
      notify('Tapahtui virhe', 'alert')
    })
  }

  // Update opening hours
  const updateOpeningHours = (id, updatedOpeningHours) => {
    openingHoursService
      .update(id, updatedOpeningHours)
      .then(returnedOpeningHours => {
        setOpeningHours(openingHours.map(openingHours => openingHours.id !== id ? openingHours : returnedOpeningHours))
        notify(`Muokattiin ${returnedOpeningHours.day} ${returnedOpeningHours.openinghours}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update live music event
  const updateLiveMusic = (id, updatedLiveMusic) => {

    liveMusicService
      .update(id, updatedLiveMusic)
      .then(returnedLiveMusic => {
        setLiveMusic(liveMusic.map(liveMusic => liveMusic.id !== id ? liveMusic : returnedLiveMusic))
        notify(`Muokattiin ${returnedLiveMusic.name}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update beer
  const updateBeer = (id, existingBeerCategory, updatedBeer) => {
    beerService
      .update(id, updatedBeer)
      .then(returnedBeer => {

        setBeers(beers.map(beers => {
          if (beers.name === existingBeerCategory) {
            beers.products = beers.products.filter(beer => beer.id !== id)
          }
          return beers
        }))

        setBeers(beers.map(beers => {
          if (beers.name === updatedBeer.category) {
            beers.products.push(returnedBeer)
          }
          return beers
        }))

        notify(`Muokattiin ${returnedBeer.name}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update Whisky
  const updateWhisky = (id, updatedWhisky) => {
    whiskyService
      .update(id, updatedWhisky)
      .then(returnedWhisky => {

        setWhiskies(whiskies.map(whiskies => {

          for (let i = 0; i < whiskies.whiskies.length; i++) {
            if (whiskies.whiskies[i].id === id)
              whiskies.whiskies.splice(i, 1)
          }

          return whiskies
        }))

        setWhiskies(whiskies.map(whiskies => {
          if (whiskies.name === updatedWhisky.area)
            whiskies.whiskies.push(returnedWhisky)
          return whiskies
        }))
        notify(`Muokattiin ${returnedWhisky.name}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  const notify = (message, type = 'info') => {

    new Notification({
      text: message,
      position: "top-right",
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      color: type === 'info' ? '##1DB954' : '#FF4136',
    })
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  // Alphabetically sorted beers and whiskies
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
        <LoginForm onLogin={login} />
      </div>
    )
  }

  return (
    <LoginPageContainer>    
      <LoginPageWrapper>        
        <LoginPageP>{user.name} logged in</LoginPageP>
        <LoginPageButton background = 'dark' onClick={logout}>Logout</LoginPageButton>
      </LoginPageWrapper>
      <LoginPageInputFormWrapper style={{margin: '5px 5px'}}>
        <LoginPageH1>Lataa Excelin csv-tiedosto</LoginPageH1>
        <input type="file" accept='.csv' lang='fin' onChange={handleFileChange} />
        <LoginPageButton background = 'light' onClick={() => uploadWhiskies(file)}>Lataa palvelimelle</LoginPageButton>
      </LoginPageInputFormWrapper>
      <LoginPageGrid>
        <LoginPageInputFormWrapper>
          <LoginPageH1>Aukioloajat</LoginPageH1>
          <Togglable buttonLabel='Uusi aika' ref = {openingHoursFormRef} >
            <NewOpeningHoursForm createNewHours = {createOpeningHours} />
          </Togglable>
        </LoginPageInputFormWrapper>
        <LoginPageInputFormWrapper>
          <LoginPageH1>Hanatuotteet</LoginPageH1>
          <Togglable buttonLabel='Uusi olut' ref = {beerFormRef}>
            <NewBeerForm createNewBeer={createBeer} />
          </Togglable>
        </LoginPageInputFormWrapper>
        <LoginPageInputFormWrapper>
          <LoginPageH1>Viskilista</LoginPageH1>
          <Togglable buttonLabel='Uusi viski' ref = {whiskyFormRef} >
            <NewWhiskyForm createNewWhisky = {createWhisky} currentWhiskies = {whiskies} />
          </Togglable>
        </LoginPageInputFormWrapper>
        <LoginPageInputFormWrapper>
          <LoginPageH1>Live-tapahtuma</LoginPageH1>
          <Togglable buttonLabel='Uusi tapahtuma' ref = {liveMusicFormRef} >
            <NewLiveMusicForm createNewLiveMusic = {createLiveMusic} />
          </Togglable>
        </LoginPageInputFormWrapper>
      </LoginPageGrid>
      <OpeningHoursView openingHoursList = {openingHours} removeOpeningHours = {removeOpeningHours} updateOpeningHours = {updateOpeningHours} />
      <LiveMusicView liveMusicList = {liveMusic} removeLiveMusic = {removeLiveMusic} updateLiveMusic = {updateLiveMusic} />
      <BeerView beerList = {sortedBeers} removeBeer = {removeBeer} updateBeer = {updateBeer} />
      <WhiskyView whiskyList = {sortedWhiskies} removeWhisky = {removeWhisky} updateWhisky = {updateWhisky} />
    </LoginPageContainer>    
  )
}

export default Login