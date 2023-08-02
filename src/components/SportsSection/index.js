import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

// import css file
import './styles.css'

import liveMusicService from '../../services/liveMusic'

import fiLogo from '../../assets/images/sportLogos/F1.svg'
import valioliigaLogo from '../../assets/images/sportLogos/Premier_League-Logo.wine.svg'
import liigaLogo from '../../assets/images/sportLogos/Liiga_logo.svg.png'
import vsportLogo from '../../assets/images/sportLogos/vsport_logo_pos.png'
import karppaLogo from '../../assets/images/sportLogos/Oulun_Kärpät_logo.png'

import GamesAndToys from '../GamesAndToys/gamesAndToys'
import TodaysMagazines from '../TodaysMagazines/todaysMagazines'

const LiveEvents = () => {
  const [liveMusic, setLiveMusic] = useState([])
  const { t } = useTranslation()

  // Get all liveMusic from db
  useEffect(() => {
    liveMusicService.getAll()
      .then(liveMusic => {
        setLiveMusic(liveMusic)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const sortedEvents = [...liveMusic].sort((a, b) => {

    a.date = a.date.split('.').reverse().join('-')
    b.date = b.date.split('.').reverse().join('-')

    a.time = a.time.split('.').join(':')
    b.time = b.time.split('.').join(':')

    const dateA = new Date(timeZoneFormatter.format(new Date(a.date + ' ' + a.time)))
    const dateB = new Date(timeZoneFormatter.format(new Date(b.date + ' ' + b.time)))

    // Sort by latest date first
    if (dateA < dateB) return -1
    if (dateA > dateB) return 1

    // If dates are equal, sort by earliest time first
    if (a.time < b.time) return -1
    if (a.time > b.time) return 1

    return 0
  }).map(event => {
    const date = new Date(event.date + ' ' + event.time)
    const formattedDate = date.toLocaleString('fi-FI', {
      timeZone: 'Europe/Helsinki',
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    return {
      ...event,
      date: formattedDate.split(' ')[0],
      time: formattedDate.split(' ')[1]
    }
  })

  return (
    <div className='live-music-box'>
      <div className='live-music-content'>
        <h2>{t('events.header')}</h2>
        {sortedEvents.map(liveMusic => (
          <section className='live-music-info' key={liveMusic.id}>
            <h3>{liveMusic.name}</h3>
            <p>{liveMusic.date} klo. {liveMusic.time}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

const KarpatInfo = () => {
  const { t } = useTranslation()

  return (
    <div className='card-grid-container'>
      <div className='karppa-box'>
        <div className='karppa-content'>
          <img src={karppaLogo} alt='Karppa logo' />
          <h2>{t('karppa.header')}</h2>
          {/* <h3>{t('karppa.paragraph1')}</h3> */}
          {/* <h3>{t('karppa.paragraph2')}</h3> */}
          <h3>{t('karppa.paragraph3')}</h3>
        </div>
      </div>
      <div className='card-grid'>
        <div className='card'>
          <div className='card-content'>
            <img className='card-image' alt='' src={liigaLogo} style={cardImageStyles} />
          </div>
        </div>
        <div className='card'>
          <div className='card-content'>
            <img className='card-image' alt='' src={vsportLogo} style={cardImageStyles} />
          </div>
        </div>
        <div className='card'>
          <div className='card-content'>
            <img className='card-image' alt='' src={fiLogo} style={cardImageStyles} />
          </div>
        </div>
        <div className='card'>
          <div className='card-content'>
            <img className='card-image' alt='' src={valioliigaLogo} style={cardImageStyles} />
          </div>
        </div>
      </div>
    </div>
  )
}

const SportsSection = () => {

  return (
    <div className = 'live-page-container'>
      <SportsEventsWrapper>
        <GamesAndToys />
        <TodaysMagazines />
        <LiveEvents />
        <KarpatInfo />
      </SportsEventsWrapper>
    </div>
  )
}

export default SportsSection

const timeZoneFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Helsinki',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})

// Styles

const cardImageStyles = {
  width: '100%',
  height: 'auto',
  padding: '10px 0'
}

const SportsEventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 1700px;
  margin: 0 auto;
  padding: 20px 0;
  margin: 0 20px;
 
  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;    
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    max-width: 900px;
  }

`