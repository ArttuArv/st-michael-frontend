import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  WhiskyListContainer, 
  WhiskyListWrapper, 
  WhiskyListBox,
  WhiskyListH1,
  WhiskyListH2, 
  WhiskyListP, 
  WhiskyListLinksContainer,
  WhiskyListMenu,
  WhiskyListMenuItem,
  WhiskyListNav,
  WhiskyListLink,
  WhiskyListInput,
  WhiskyListPageContainer,
  WhiskyPageHeaderH2,
  WhiskyTableData
} from './WhiskyListElements';

import { rearrangeWhiskyOrder } from '../../utils/utils';

import PropTypes from 'prop-types';
import whisky from '../../services/whisky';

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
}

const tableWrapper = {
  width: '100%',
  padding: '0 10px',
  maxWidth: '1300px',
  color: '#010606',
}

const buttonStyle = {
  position: 'absolute',
  width: '30px',
  height: '30px',
  right: '6px',
  top: '10px',
  zIndex: '2',
  border: 'none',
  borderRadius: '50%',    
  cursor: 'pointer',
  color: '#F5BD30',
  backgroundColor: '#06260F',
  transform: 'translateX(2px)'
}

const WhiskyListNavs = ({ whisky }) => {
  return (
    <WhiskyListNav>
      <WhiskyListLinksContainer>
        {whisky.map(area => (
          <WhiskyListMenu key = {area.id}>
            <WhiskyListMenuItem>
              <WhiskyListLink 
              to={area.name} 
              spy={true} 
              smooth={true}
              offset = {-180} 
              duration={500}>
                {area.name}
              </WhiskyListLink>
            </WhiskyListMenuItem>
        </WhiskyListMenu>
        ))}
      </WhiskyListLinksContainer>
    </WhiskyListNav>
  )
}

// WhiskyListNavs.propTypes = {
//   whisky: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       whiskies: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string.isRequired,
//           name: PropTypes.string.isRequired,
//           price: PropTypes.number.isRequired,
//         })
//       )
//     })
//   )
// }

const SearchResult = ({ filteredList, input, t }) => { 
  
   // Jos filtteröity lista on tyhjä ja inputissa on tekstiä, kerrotaan käyttäjälle ettei hakutuloksia löytynyt
   if (filteredList.length === 0 && input.length > 0) {
    return (
      <WhiskyListP>{t('viskit.notFound')}</WhiskyListP>
    )
  }
  // Jos filtteröity lista ei ole tyhjä ja input on tyhjä, poistetaan ilmoitusviesti
  if (filteredList.length > 0 && input.length === 0) {
    return (
      <>
      </>
    )
  }

  // Jos filtteröity lista on tyhjä ja input on tyhjä, poistetaan ilmoitusviesti
  if (filteredList.length === 0 && input.length === 0) {
    return (
      <>
      </>
    )
  }
  
  // Jos listan pituus on pienempi kuin 40 JA suurempi kuin 0, niin näytä tuotteet
  if (filteredList.length < 40 && filteredList.length > 0) {
    return (  
      <div style = {tableWrapper}>
        <table style = {tableStyle}>
          <tbody>
            <tr>
              <th style = {{textAlign: 'left'}}>{t('viskit.nimi')}</th>
              {/* <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th> */}
            </tr>      
            {filteredList.map((whisky) => (          
              <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {whisky.id}>
                <WhiskyTableData>{whisky.name}</WhiskyTableData>
                <td style = {{ textAlign: 'right'}}>{whisky.area}</td>
              </tr>                          
            ))}
            </tbody>
          </table> 
        </div>   
    )
  } // Jos hakutuloksia on yli 40, kerrotaan käyttäjälle että tuloksia on liikaa
  else {
    return (
      <WhiskyListP>{t('viskit.tooMany')}</WhiskyListP>
    )
  }
}

const WhiskyList = ({ whisky }) => { 
  const [whiskies, setWhiskies ] = useState([])
  const [filter, setFilter] = useState('')
  const { t } = useTranslation();

  const handleChange = (event) => {
    setFilter(event.target.value);

    const filtered = whisky.map(whiskies => (
      whiskies.products.filter(({ name }) => name.toLowerCase().includes(event.target.value.toLowerCase()))
    ));

    const flattenedArray = filtered.flat();
    setWhiskies(flattenedArray);
  }

  return (
    <WhiskyListPageContainer>
      <WhiskyListContainer>
        <WhiskyPageHeaderH2>{t('viskit.header1')}</WhiskyPageHeaderH2>
        <WhiskyPageHeaderH2>{t('viskit.header2')}</WhiskyPageHeaderH2>
        <WhiskyPageHeaderH2>{t('viskit.header3')}</WhiskyPageHeaderH2>
      </WhiskyListContainer >
      <WhiskyListNavs whisky = {whisky} />
      <WhiskyListContainer>
        <WhiskyListWrapper>
          <WhiskyListBox>
            <WhiskyPageHeaderH2 dark >{t('viskit.haku')}</WhiskyPageHeaderH2>
            <div style = {{width: 'min(250px)', position: 'relative'}}>
              <WhiskyListInput 
              value = {filter} 
              placeholder = {t('viskit.hakuPlaceholder')}
              onChange = {handleChange} />
              <button style = {buttonStyle} onClick = {() => {setFilter(''); setWhiskies([])}}>X</button>
            </div>
            <SearchResult filteredList = {whiskies} input = {filter} t = {t} />
          </WhiskyListBox>
        </WhiskyListWrapper>
      </WhiskyListContainer>
        <WhiskyListContainer>
          <WhiskyListWrapper>
            {whisky.map(area => (
              <WhiskyListBox name = {area.area} key={area.id}>
                <WhiskyListH1>{area.area}</WhiskyListH1>
                <div style = {tableWrapper}>
                <table style = {tableStyle}>
                  <tbody>
                    <tr>
                      <th style = {{textAlign: 'left'}}>{t('viskit.nimi')}</th>
                      {/* <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th> */}
                    </tr>      
                    {area.products.map(whisky => (          
                      <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {whisky.id}>
                        <WhiskyTableData>{whisky.name}</WhiskyTableData>
                        {/* <td style = {{ textAlign: 'right'}}>{whisky.price}</td> */}
                      </tr>                          
                    ))}
                    </tbody>
                  </table> 
                </div>
              </WhiskyListBox>
            ))}
          </WhiskyListWrapper>
        </WhiskyListContainer>
    </WhiskyListPageContainer>
  )
}

WhiskyList.proptypes = {
  whisky: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      area: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          area: PropTypes.string.isRequired,
        })
      )
    })
  )
}

export default WhiskyList
