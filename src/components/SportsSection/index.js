import { useState, useEffect } from 'react'

// import css file
import './styles.css'

import liveMusicService from '../../services/liveMusic'

import fiLogo from '../../assets/images/sportLogos/F1.svg'
import valioliigaLogo from '../../assets/images/sportLogos/Premier_League-Logo.wine.svg'
import liigaLogo from '../../assets/images/sportLogos/Liiga_logo.svg.png'
import vsportLogo from '../../assets/images/sportLogos/vsport_logo_pos.png'
import karppaLogo from '../../assets/images/sportLogos/Oulun_Kärpät_logo.png'

const SportsSection = () => {
  const [liveMusic, setLiveMusic] = useState([])

  // Get all liveMusic from db
  useEffect(() => {
    liveMusicService.getAll()
      .then(liveMusic => {
        setLiveMusic(liveMusic)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const sortedEvents = liveMusic.sort((a, b) => {
    // Convert the date strings to Date objects for comparison
    const eventObjectA = a.date.split('.').reverse().join('-') + '-' + a.time.split('.').join(':') + ':00'
    const eventObjectB = b.date.split('.').reverse().join('-') + '-' + b.time.split('.').join(':') + ':00'

    const dateA = new Date(eventObjectA)
    const dateB = new Date(eventObjectB)
    
    // Sort by latest date first
    if (dateA < dateB) return -1
    if (dateA > dateB) return 1
  
    // If dates are equal, sort by earliest time first
    if (a.time < b.time) return -1
    if (a.time > b.time) return 1
    
    return 0
  })

  return (
    <div className='live-page-container'>
      <div className="live-page-wrapper">
        <div className='live-music-box'>
          <div className='live-music-content'>
            <h2>Tulevat tapahtumat</h2>
            {sortedEvents.map(liveMusic => (
              <section className='live-music-info' key={liveMusic.id}>
                <h3>{liveMusic.name}</h3>
                <p>{liveMusic.date} klo. {liveMusic.time}</p>
              </section>
            ))}
          </div>
        </div>
        <div className='card-grid-container'>
          <div className='karppa-box'>
            <div className='karppa-content'>
              <img src={karppaLogo} alt='Karppa logo' />
              <h2>Kärppäpelit</h2>
              <h3>Bussikuljetukset jäähallille Kärppien Liiga-kotiotteluihin.</h3>
              <h3>Kyyti lähtee baarin edestä 20min ennen pelin alkua, liput ilmaiseen bussikyytiin saat tiskiltä.</h3>
              <h3 className='h3-bold-yellow'>Näytämme kaikki Kärppien pelit myös TV:sta.</h3>
            </div>
          </div>
          <div className='card-grid'>
            <div className='card'>
              <div className='card-content'>
                <img className='card-image' alt='' src={liigaLogo} style={{ width: '100%', height: 'auto', padding: '10px 0' }} />
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <img className='card-image' alt='' src={vsportLogo} style={{ width: '100%', height: 'auto', padding: '10px 0' }} />
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <img className='card-image' alt='' src={fiLogo} style={{ width: '100%', height: 'auto', padding: '10px 0' }} />
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <img className='card-image' alt='' src={valioliigaLogo} style={{ width: '100%', height: 'auto', padding: '10px 0' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsSection