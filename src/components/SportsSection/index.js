import React from 'react'

// import css file
import './styles.css';

import fiLogo from '../../assets/images/sportLogos/F1.svg';
import valioliigaLogo from '../../assets/images/sportLogos/Premier_League-Logo.wine.svg';
import liigaLogo from '../../assets/images/sportLogos/Liiga_logo.svg.png';
import vsportLogo from '../../assets/images/sportLogos/Vsport1_Suomi_Vert_RGB_pos.png';
import karppaLogo from '../../assets/images/sportLogos/Oulun_Kärpät_logo.png';

const SportsSection = () => {

  return (
    <>
      <div className="page-container">
        <div className='info-box'>
          <div className='info-content'>
            <h2>Urheilu</h2>
            <ul>
              <li>Pystytään näyttämään kolmea lähetystä yhtä aikaa.</li>
              {/* <li>Jääkiekkoa, jalkapalloa, Formula 1</li>
              <li>Jääkiekkoa, jalkapalloa, Formula 1</li>
              <li>Jääkiekkoa, jalkapalloa, Formula 1</li>
              <li>Rivejä näyttämään kuinka paljon asiaa tänne mahtuu ja miten teksti skaalautuu.</li> */}
            </ul>
          </div>
        </div>
        <div className='card-grid-container'>
          <div className='karppa-box'>
            <div className='karppa-content'>
              <img src={karppaLogo} alt='Karppa logo' />
              <h2>Kärppäpelit</h2>
              <h3>Bussikuljetukset jäähallille Kärppien kotiotteluihin.</h3>
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
    </>
  )
}

export default SportsSection