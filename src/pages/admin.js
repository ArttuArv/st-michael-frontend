import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useLogout from '../hooks/useLogout'
import useInput from '../hooks/useInput'

import Togglable from '../components/Togglable'
import NewOpeningHoursForm from '../components/AdminPageForms/NewOpeningHoursForm'
import UpdateOpeningHoursForm from '../components/AdminPageForms/UpdateOpeningHoursForm'
import NewBeerForm from '../components/AdminPageForms/NewBeerForm'
import UpdateBeerForm from '../components/AdminPageForms/UpdateBeerForm'
import NewWhiskyForm from '../components/AdminPageForms/NewWhiskyForm'
import UpdateWhiskyForm from '../components/AdminPageForms/UpdateWhiskyForm'
import NewLiveMusicForm from '../components/AdminPageForms/NewLiveMusicForm'
import UpdateLiveMusicForm from '../components/AdminPageForms/UpdateLiveMusicForm'
import UpdateUserForm from '../components/AdminPageForms/UpdateUserForm/updateUserForm'

import Modal from '../components/AdminPageForms/Modal/modal'
import NotificationModal from '../components/Modal/modal'

import beersService from '../services/beer'
import whiskiesService from '../services/whisky'
import openingHoursService from '../services/openinghours'
import liveMusicService from '../services/liveMusic'

import { checkIfFileIsCsv, rearrangeWhiskyOrder } from '../utils/utils'

import Notification from '../components/Notification/Notification.js'

import { Box, Tab, Tabs } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../index.css'

import {
  LoginPageContainer,
  LoginPageH1,
  LoginPageH3,
  LoginPageP,
  LoginPageButton,
  LoginPageInputFormWrapper,
  LoginPageWrapper,
  LoginPageWhiskyViewContainer,
  LoginPageWhiskyViewList,
  LoginPageWhiskyViewUl,
  LoginPageWhiskyViewLi,
  LoginPageWhiskyRemoveButton,
  LoginPageWhiskyUpdateButton,
  LoginPageShortListGrid,
  LoginPageShortListGridItem,
  LoginPageInfoButton
} from '../components/LoginPageStyledComponents/LoginPageElements'

const csvHelpText = 'Laitan tähän youtube-linkin csv-ohjeisiin'
const updateDeleteHelpText = 'Päivittäminen onnistuu klikkaamalla päivitä-nappia ja täyttämällä lomake. Tietoja joita ei tarvitse päivittää voi jättää tyhjäksi. Jos haluat poistaa tuotteen, klikkaa poista-nappia.'
const newFormHelpText = 'Lisääminen onnistuu täyttämällä lomake ja klikkaamalla lisää-nappia. Kaikki kentät ovat pakollisia ja lomake herjaa jos jokin kenttä on tyhjä.'

const linkText = 'https://youtu.be/mwS8MQlYo_E'


const OpeningHoursView = ({ openingHoursList, removeOpeningHours, updateOpeningHours }) => {
  const [showAll, setShowAll] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => {
    setModalOpen(false)
  }

  const open = () => {
    setModalOpen(true)
  }

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Näytä kaikki aukioloajat</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <NotificationModal handleClose={close} text={updateDeleteHelpText} />}
      </AnimatePresence>

      <LoginPageWhiskyViewContainer>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Aukioloajat</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(false)}>Piilota</LoginPageButton>
        </div>
        <LoginPageShortListGrid>
          {openingHoursList.map(openingHour =>
            <LoginPageShortListGridItem key={openingHour.id}>
              <OpeningHoursListItem openingHour={openingHour} remove={removeOpeningHours} update={updateOpeningHours} />
            </LoginPageShortListGridItem>
          )}
        </LoginPageShortListGrid>
      </LoginPageWhiskyViewContainer>
    </>
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
        <UpdateOpeningHoursForm openingHours={openingHour} visibility={toggleVisibility} updateOpeningHours={update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(openingHour.id, openingHour)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )
}

const BeerView = ({ beerList, removeBeer, updateBeer }) => {
  const [showAll, setShowAll] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  console.log('beerList: ', beerList)

  const close = () => {
    setModalOpen(false)
  }

  const open = () => {
    setModalOpen(true)
  }

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Näytä kaikki hanatuotteet</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <NotificationModal handleClose={close} text={updateDeleteHelpText}></NotificationModal>}
      </AnimatePresence>

      <LoginPageWhiskyViewContainer>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Hanatuotteet</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(false)}>Piilota</LoginPageButton>
        </div>
        {beerList.map(products =>
          <div key={products.category}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LoginPageH3 style={{ marginTop: '20px' }}>{products.category}</LoginPageH3>
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
    </>
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
        <UpdateBeerForm beer={product} visibility={toggleVisibility} updateBeer={update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(product.id, product)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )

}

const WhiskyView = ({ whiskyList, removeWhisky, updateWhisky }) => {
  const [showAll, setShowAll] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const close = () => {
    setModalOpen(false)
  }

  const open = () => {
    setModalOpen(true)
  }

  const filteredWhiskies = whiskyList.map((whisky) => ({
    ...whisky,
    products: whisky.products.filter((product) => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }))

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }


  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Näytä kaikki viskit</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <NotificationModal handleClose={close} text={updateDeleteHelpText} />}
      </AnimatePresence>

      <LoginPageWhiskyViewContainer>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Viskilista</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(false)}>Piilota</LoginPageButton>
          <div style = {searchInputWrapper}>
            <input
              style={searchInput}
              type="text"
              placeholder="Etsi viskejä..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* <button style={searchButton} onClick={() => { setSearchQuery('') }}>&#x2716</button> */}
            <button style={searchButton} onClick={() => { setSearchQuery('') }}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
     
        {filteredWhiskies.map(whiskies =>
          <div key={whiskies.area}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LoginPageH3 style={{ marginTop: '20px' }}>{whiskies.area}</LoginPageH3>
            </div>
            <LoginPageWhiskyViewUl>
              {whiskies.products.map(whisky =>
                <LoginPageWhiskyViewList key={whisky.id}>
                  <WhiskyListItem currentWhiskies={filteredWhiskies} product={whisky} remove={removeWhisky} update={updateWhisky} />
                </LoginPageWhiskyViewList>
              )}
            </LoginPageWhiskyViewUl>
          </div>
        )}
      </LoginPageWhiskyViewContainer>
    </>
  )
}

const WhiskyListItem = ({ currentWhiskies, product, remove, update }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <LoginPageWhiskyViewLi>{product.name}</LoginPageWhiskyViewLi>
      <LoginPageWhiskyUpdateButton onClick={toggleVisibility}>Päivitä</LoginPageWhiskyUpdateButton>
      <Modal visible={visible}>
        <UpdateWhiskyForm currentWhiskies={currentWhiskies} whiskyToUpdate={product} visibility={toggleVisibility} updateWhisky={update} />
      </Modal>
      <LoginPageWhiskyRemoveButton onClick={() => remove(product.id, product)}>Poista</LoginPageWhiskyRemoveButton>
    </>
  )
}

const LiveMusicView = ({ liveMusicList, removeLiveMusic, updateLiveMusic }) => {
  const [showAll, setShowAll] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => {
    setModalOpen(false)
  }

  const open = () => {
    setModalOpen(true)
  }

  if (!showAll) {
    return (
      <LoginPageWhiskyViewContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Näytä kaikki live-tapahtumat</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(true)}>Avaa lista</LoginPageButton>
        </div>
      </LoginPageWhiskyViewContainer>
    )
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <NotificationModal handleClose={close} text={updateDeleteHelpText} />}
      </AnimatePresence>

      <LoginPageWhiskyViewContainer>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginPageH3 fontsize='small' >Live-tapahtumat</LoginPageH3>
          <LoginPageButton background='light' onClick={() => setShowAll(false)}>Piilota</LoginPageButton>
        </div>
        <LoginPageShortListGrid>
          {liveMusicList.map(liveMusic =>
            <LoginPageShortListGridItem key={liveMusic.id}>
              <LiveMusicListItem livemusic={liveMusic} remove={removeLiveMusic} update={updateLiveMusic} />
            </LoginPageShortListGridItem>
          )}
        </LoginPageShortListGrid>
      </LoginPageWhiskyViewContainer>
    </>
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

const TabsPanel = ({ notify }) => {

  const axiosPrivate = useAxiosPrivate()

  const [value, setValue] = useState('1')

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label='basic tabs example'
        centered={true}
        sx={
          {
            '& .MuiTabs-indicator': {
              backgroundColor: '#F5BD30',
            },
            '& .MuiTab-root': {
              color: '#F5BD30',
            },
            '& .Mui-selected': {
              color: '#F5BD30',
            },
            '& .MuiTab-textColorInherit.Mui-selected': {
              color: '#F5BD30',
            },
            '& .MuiTab-textColorInherit': {
              color: '#F5BD30',
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
              flexWrap: 'wrap',
            },
            ':hover': {
              color: 'red',
            },
            ':active': {
              color: 'red',
            },
          }
        }
      >
        <Tab label='Hanatuotteet' value='1' />
        <Tab label='Aukioloajat' value='2' />
        <Tab label='Live-tapahtumat' value='3' />
        <Tab label='Viskit' value='4' />
        <Tab label='Käyttäjät' value='5' />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {value === '1' && <BeerTab axiosPrivate={axiosPrivate} notify={notify} />}
        {value === '2' && <OpeningHoursTab axiosPrivate={axiosPrivate} notify={notify} />}
        {value === '3' && <LiveMusicTab axiosPrivate={axiosPrivate} notify={notify} />}
        {value === '4' && <WhiskyTab axiosPrivate={axiosPrivate} notify={notify} />}
        {value === '5' && <UserTab axiosPrivate={axiosPrivate} notify={notify} />}
      </Box>
    </>
  )
}

const WhiskyTab = ({ axiosPrivate, notify }) => {

  const [whiskies, setWhiskies] = useState([])
  const [file, setFile] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const whiskyFormRef = useRef()

  // Get all whiskies from db
  useEffect(() => {
    whiskiesService.getAll()
      .then(whiskies => {
        setWhiskies(whiskies)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  // Create new whisky
  const createWhisky = (newWhisky) => {
    axiosPrivate.post('whisky', newWhisky)
      .then(response => {
        setWhiskies(whiskies.map(area => {
          if (area.area === newWhisky.area) {
            area.products.push(response.data)
          }
          return area
        }))
  
        notify(`Lisätty ${response.data.name}!`)
        whiskyFormRef.current.toggleVisibility()
      })
      .catch(exception => {
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

      const formData = new FormData()

      if (file) {
        formData.append('csvfile', file)

        axiosPrivate.post('csv', formData)
          .then(response => {
            console.log('Response: ', response.data.whiskys)
            const returnedWhiskies = response.data.whiskys
            // this is fresh list of whiskys after a csv upload
            // we need to update the state with this new list
            setWhiskies(returnedWhiskies)
            notify(`Ladattu ${response.data.length} tuotetta! Päivitä selain hetken kuluttua!`)
            setFile(() => null)

          }).catch(exception => {

            notify(`${exception}`, 'alert')
            console.log('Exception: ', exception)

          })
      } else {
        notify('Valitse tiedosto', 'alert')
      }
    } else {
      notify(`Väärä tiedostomuoto!`, 'alert')
    }
  }

  // Remove whisky from db
  const removeWhisky = (id, whisky) => {

    const ok = window.confirm(`Poistetaanko ${whisky.name} ?`)

    if (!ok) {
      return
    }

    axiosPrivate.delete(`whisky/${id}`)
      .then(() => {
        setWhiskies(prevWhiskys => {
          const areaIndex = prevWhiskys.findIndex(area => area.products.find(whisky => whisky.id === id))

          if (areaIndex !== -1) {
            prevWhiskys[areaIndex].products = prevWhiskys[areaIndex].products.filter(whisky => whisky.id !== id)
          }         
          return [...prevWhiskys] // Make sure to return a new array reference to trigger re-render
        })
        notify(`${whisky.name} poistettu!`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update Whisky
  const updateWhisky = (id, updatedWhisky) => {
    axiosPrivate.put(`whisky/${id}`, updatedWhisky)
      .then(returnedWhisky => {
        setWhiskies(whiskies.map(area => {
          for (let i = 0; i < area.products.length; i++) {
            if (area.products[i].id === id) {
              area.products.splice(i, 1)
              break // Stop iterating once the item is found and removed
            }
          }

          if (area.area === updatedWhisky.area) {
            area.products.push(returnedWhisky.data)
          }

          return area
        }))

        notify(`Muokattiin ${returnedWhisky.data.name}`)
      })
      .catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const sortedWhiskies = whiskies.map(whisky => {
    whisky.products.sort((a, b) => a.name.localeCompare(b.name))
    return whisky
  })

  return (
    <>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <NotificationModal handleClose={close} text={csvHelpText} linkText={linkText} />}
      </AnimatePresence>

      <LoginPageInputFormWrapper>
        <LoginPageH1>Viskilista</LoginPageH1>
        <Togglable buttonLabel='Uusi viski' ref={whiskyFormRef} >
          <NewWhiskyForm createNewWhisky={createWhisky} currentWhiskies={whiskies} />
        </Togglable>
      </LoginPageInputFormWrapper>
      <LoginPageInputFormWrapper style={{ margin: '5px 0px' }}>
        <LoginPageH1>Lataa viskilista csv-tiedosto</LoginPageH1>

        <LoginModalButton modalOpen={modalOpen} closeModal={close} openModal={open} />

        <input type='file' accept='.csv' lang='fin' onChange={handleFileChange} />
        <LoginPageButton background='light' onClick={() => uploadWhiskies(file)}>Lataa palvelimelle</LoginPageButton>
      </LoginPageInputFormWrapper>

      <WhiskyView whiskyList={sortedWhiskies} removeWhisky={removeWhisky} updateWhisky={updateWhisky} />
    </>
  )
}

const BeerTab = ({ axiosPrivate, notify }) => {
  const [beers, setBeers] = useState([])

  const beerFormRef = useRef()

  // Get all beers from db
  useEffect(() => {
    beersService.getAll()
      .then(beers => {
        setBeers(beers)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Create new beer
  const createBeer = (newBeer) => {
    axiosPrivate.post('beer', newBeer)
      .then(response => {
        setBeers(prevBeers => {
          const updatedBeers = prevBeers.map(category => {
            if (category.category === newBeer.category) {
              category.products.push(response.data)
            }
            return category
          })
  
          const categoryExists = updatedBeers.some(category => category.category === newBeer.category)
  
          if (!categoryExists) {
            const newCategory = {
              name: newBeer.category,
              category: newBeer.category,
              products: [response.data],
              id: prevBeers.length + 1
            }
            updatedBeers.push(newCategory)
          }
  
          return updatedBeers
        })
        notify(`Lisätty ${response.data.name}`)
        beerFormRef.current.toggleVisibility()
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

    axiosPrivate.delete(`beer/${id}`)
      .then(() => {
        setBeers(prevBeers => {
          const categoryIndex = prevBeers.findIndex(category => category.products.find(beer => beer.id === id))
  
          if (categoryIndex !== -1) {
            prevBeers[categoryIndex].products = prevBeers[categoryIndex].products.filter(beer => beer.id !== id)
          }
  
          notify(`${beerCategory.name} poistettu!`)
          return [...prevBeers] // Make sure to return a new array reference to trigger re-render
        })
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update beer
  const updateBeer = (id, existingBeerCategory, updatedBeer) => {

    if (updatedBeer.category === undefined) {
      notify('Kategoria ei voi olla tyhjä', 'alert')
      return
    }

    axiosPrivate.put(`beer/${id}`, updatedBeer)
      .then(returnedBeer => {
        setBeers(prevBeers => {
          const updatedBeers = prevBeers.map(beerCategory => {
            if (beerCategory.name === existingBeerCategory) {
              // Remove the beer with the specified id from the existing category
              beerCategory.products = beerCategory.products.filter(beer => beer.id !== id)

              // If the old category is empty, remove it from the state
              if (beerCategory.products.length === 0) {
                return null // This will filter out the category from the final array
              }
            }

            if (beerCategory.name === updatedBeer.category) {
              // Add the returned beer data to the updated category
              beerCategory.products.push(returnedBeer.data)
            }

            return beerCategory
          }).filter(Boolean) // Filter out null entries

          // If the updated category doesn't exist, create a new category
          if (!updatedBeers.some(beerCategory => beerCategory.name === updatedBeer.category)) {
            const newCategory = {
              name: updatedBeer.category,
              products: [returnedBeer.data]
            }
            updatedBeers.push(newCategory)
          }

          notify(`Muokattiin ${returnedBeer.data.name}`)
          return updatedBeers
        })
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  const sortedBeers = beers.map(beer => {
    beer.products.sort((a, b) => a.name.localeCompare(b.name))
    return beer
  })

  return (
    <>
      <LoginPageInputFormWrapper>
        <LoginPageH1>Hanatuotteet</LoginPageH1>
        <Togglable buttonLabel='Uusi olut' ref={beerFormRef}>
          <NewBeerForm createNewBeer={createBeer} />
        </Togglable>
      </LoginPageInputFormWrapper>
      <BeerView beerList={sortedBeers} removeBeer={removeBeer} updateBeer={updateBeer} />
    </>
  )
}

const OpeningHoursTab = ({ axiosPrivate, notify }) => {

  const [openingHours, setOpeningHours] = useState([])

  const openingHoursFormRef = useRef()

  // Get all opening hours from db
  useEffect(() => {
    openingHoursService.getAll()
      .then(openingHours => {
        setOpeningHours(openingHours)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Create new opening hours
  const createOpeningHours = (newOpeningHours) => {
    axiosPrivate.post('openinghours', newOpeningHours)
      .then(response => {
        setOpeningHours(openingHours.concat(response.data))
        notify(`Lisätty ${response.data.day} ${response.data.openinghours}`)
        openingHoursFormRef.current.toggleVisibility()
      }).catch(exception => {
        notify(`${exception?.response?.data?.error}`, 'alert')
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

    axiosPrivate.delete(`openinghours/${id}`)
      .then(() => {
        setOpeningHours(openingHours.filter(openingHours => openingHours.id !== id))
        notify(`${toRemove.day} - ${toRemove.openinghours} poistettiin onnistuneesti!`)
      }).catch(exception => {
        notify('Tapahtui virhe', 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update opening hours
  const updateOpeningHours = (id, updatedOpeningHours) => {
    axiosPrivate.put(`openinghours/${id}`, updatedOpeningHours)
      .then(returnedOpeningHours => {
        setOpeningHours(openingHours.map(openingHours => openingHours.id !== id ? openingHours : returnedOpeningHours.data))
        notify(`Muokattiin ${returnedOpeningHours.data.day} - ${returnedOpeningHours.data.openinghours}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  return (
    <>
      <LoginPageInputFormWrapper>
        <LoginPageH1>Aukioloajat</LoginPageH1>
        <Togglable buttonLabel='Uusi aika' ref={openingHoursFormRef} >
          <NewOpeningHoursForm createNewHours={createOpeningHours} />
        </Togglable>
      </LoginPageInputFormWrapper>
      <OpeningHoursView openingHoursList={openingHours} removeOpeningHours={removeOpeningHours} updateOpeningHours={updateOpeningHours} />
    </>
  )
}

const LiveMusicTab = ({ axiosPrivate, notify }) => {

  const [liveMusic, setLiveMusic] = useState([])

  const liveMusicFormRef = useRef()

  // Get all live music events from db
  useEffect(() => {
    liveMusicService.getAll()
      .then(liveMusic => {
        setLiveMusic(liveMusic)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // Create new live music event
  const createLiveMusic = (newLiveMusic) => {
    axiosPrivate.post('livemusic', newLiveMusic)
      .then(response => {
        setLiveMusic(liveMusic.concat(response.data))
        notify(`Lisätty ${response.data.name}`)
        liveMusicFormRef.current.toggleVisibility()
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Remove live music event from db
  const removeLiveMusic = (id) => {
    const toRemove = liveMusic.find(liveMusic => liveMusic.id === id)

    const ok = window.confirm(`Poistetaanko ${toRemove.name}?`)

    if (!ok) return

    axiosPrivate.delete(`livemusic/${id}`)
      .then(() => {
        setLiveMusic(liveMusic.filter(liveMusic => liveMusic.id !== id))
        notify(`${toRemove.name} poistettiin onnistuneesti!`)
      }).catch(exception => {
        notify('Tapahtui virhe', 'alert')
        console.log('Exception: ', exception)
      })
  }

  // Update live music event
  const updateLiveMusic = (id, updatedLiveMusic) => {

    console.log('updatedLiveMusic: ', updatedLiveMusic)

    axiosPrivate.put(`livemusic/${id}`, updatedLiveMusic)
      .then(returnedLiveMusic => {
        setLiveMusic(liveMusic.map(liveMusic => liveMusic.id !== id ? liveMusic : returnedLiveMusic.data))
        notify(`Muokattiin ${returnedLiveMusic.data.name}`)
      }).catch(exception => {
        notify(`${exception.response.data.error}`, 'alert')
        console.log('Exception: ', exception)
      })
  }

  return (
    <>
      <LoginPageInputFormWrapper>
        <LoginPageH1>Live-tapahtuma</LoginPageH1>
        <Togglable buttonLabel='Uusi tapahtuma' ref={liveMusicFormRef} >
          <NewLiveMusicForm createNewLiveMusic={createLiveMusic} />
        </Togglable>
      </LoginPageInputFormWrapper>
      <LiveMusicView liveMusicList={liveMusic} removeLiveMusic={removeLiveMusic} updateLiveMusic={updateLiveMusic} />
    </>
  )
}

const UserTab = () => {

  return (
    <>
      {/* <LoginPageGrid> */}
      {/* <LoginPageInputFormWrapper style={{ margin: '5px 0' }}>
        <LoginPageH1>Lisää uusi käyttäjä</LoginPageH1>
        <Togglable buttonLabel='Lisää uusi käyttäjä'>
          <NewUserForm />
        </Togglable>
      </LoginPageInputFormWrapper> */}
      <LoginPageInputFormWrapper>
        <LoginPageH1>Päivitä käyttäjä</LoginPageH1>
        <Togglable buttonLabel='Päivitä käyttäjä'>
          <UpdateUserForm />
        </Togglable>
      </LoginPageInputFormWrapper>
      {/* </LoginPageGrid> */}
    </>
  )
}

const LoginModalButton = ({ modalOpen, closeModal, openModal }) => {

  return (
    <LoginPageInfoButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // className='help-button'
      onClick={() => (modalOpen ? closeModal() : openModal())}
    >
      &#9432;
    </LoginPageInfoButton>
  )

}

const Admin = () => {

  const logout = useLogout()

  const [user, resetUser, userAttributes] = useInput('user', '')

  const navigate = useNavigate()
  // const location = useLocation()
  // const from = location.state?.from?.pathname || '/'

  // Handle user logout
  const signOut = async () => {

    resetUser()

    await logout()
    navigate('/')

    notify('Kirjauduit ulos', 'info')
  }

  const notify = (message, type = 'info') => {
    new Notification({
      text: message,
      position: 'top-right',
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      color: type === 'info' ? '#1DB954' : '#FF4136',
    })
  }

  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LoginPageP>{user} logged in</LoginPageP>
        <LoginPageButton background='dark' onClick={signOut}>Logout</LoginPageButton>
      </LoginPageWrapper>
      <div style={{height: '100%'}}>
        <TabsPanel notify={notify} />
      </div>
    </LoginPageContainer>
  )
}

export default Admin

const searchInputWrapper = {
  position: 'relative',
  width: '100%',
  maxWidth: '300px',
  margin: '5px 0',
}

const searchInput = {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  boxSizing: 'border-box',
  border: '3px solid #EEBC1D',
  borderRadius: '4px',
  backgroundColor: '#f8f8f8',
  fontSize: '16px',
  resize: 'vertical',
}

const searchButton = {
  position: 'absolute',
  width: '30px',
  height: '30px',
  right: '10px',
  top: '20px',
  zIndex: '2',
  // border: 'none',
  border: '1px solid gold',
  borderRadius: '50%', 
  cursor: 'pointer',
  color: 'gold',
  backgroundColor: 'black',
  transform: 'translateX(2px)'
}