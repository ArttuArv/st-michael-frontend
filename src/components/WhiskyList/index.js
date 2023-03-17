import React, { useState } from 'react'
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
} from './WhiskyListElements';

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

const SearchResult = ({ filteredList, input }) => { 
  
   // Jos filtteröity lista on tyhjä ja inputissa on tekstiä, kerrotaan käyttäjälle ettei hakutuloksia löytynyt
   if (filteredList.length === 0 && input.length > 0) {
    return (
      <>
        <WhiskyListP>Haulla ei löydy viskin viskiä.</WhiskyListP>
      </>
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
              <th style = {{textAlign: 'left'}}>Nimi</th>
              {/* <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th> */}
            </tr>      
            {filteredList.map((whisky, index) => (          
              <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {index}>
                <td style = {{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px' }}>{whisky.name}</td>
                {/* <td style = {{ textAlign: 'right'}}>{whisky.price}</td> */}
              </tr>                          
            ))}
            </tbody>
          </table> 
        </div>   
    )
  } // Jos hakutuloksia on yli 40, kerrotaan käyttäjälle että tuloksia on liikaa
  else {
    return (
      <WhiskyListP>Liikaa tuloksia. Rajaa hakua.</WhiskyListP>
    )
  }
}

const WhiskyList = ({ whisky }) => { 
  const [whiskies, setWhiskies ] = useState([])
  const [filter, setFilter] = useState('')

  const handleChange = (event) => {
    setFilter(event.target.value);

    const filtered = whisky.map(whiskies => (
      whiskies.whiskies.filter(({ name }) => name.toLowerCase().includes(event.target.value.toLowerCase()))
    ));

    const flattenedArray = filtered.flat();
    setWhiskies(flattenedArray);
  }

  // Takaperin järjestys, jotta Uutuudet-kategoria näkyy ensimmäisenä
  // Tää pitää funtsia paremmaksi
  const sortedWhisky = whisky.sort((a, b) => b.name.localeCompare(a.name));

  return (
    <WhiskyListPageContainer>
      <WhiskyListContainer>
        <WhiskyPageHeaderH2>Lista löytyy myös baaritiskiltä.</WhiskyPageHeaderH2>
        <WhiskyPageHeaderH2>Viskilista elää viikottain. Pidätämme oikeudet muutoksiin.</WhiskyPageHeaderH2>
        <WhiskyPageHeaderH2>Kysy uutuuksista henkilökunnalta.</WhiskyPageHeaderH2>
      </WhiskyListContainer>
        <WhiskyListNavs whisky = {whisky} />
      <WhiskyListContainer>
        <WhiskyListWrapper>
          <WhiskyListBox>
            <WhiskyPageHeaderH2>Haku</WhiskyPageHeaderH2>
            <div style = {{width: 'min(250px)', position: 'relative'}}>
              <WhiskyListInput 
              value = {filter} 
              placeholder = {'Etsi viskejä...'} 
              onChange = {handleChange} />
              <button style = {buttonStyle} onClick = {() => {setFilter(''); setWhiskies([])}}>X</button>
            </div>
            <SearchResult filteredList = {whiskies} input = {filter} />
          </WhiskyListBox>
        </WhiskyListWrapper>
      </WhiskyListContainer>
      <>
        <WhiskyListContainer>
          <WhiskyListWrapper>
            {sortedWhisky.map(area => (
              <WhiskyListBox name = {area.name} key={area.id}>
                <WhiskyListH1>{area.name}</WhiskyListH1>
                <div style = {tableWrapper}>
                <table style = {tableStyle}>
                  <tbody>
                    <tr>
                      <th style = {{textAlign: 'left'}}>Nimi</th>
                      {/* <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th> */}
                    </tr>      
                    {area.whiskies.map(whisky => (          
                      <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {whisky.id}>
                        <td style = {{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px' }}>{whisky.name}</td>
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
      </>
    </WhiskyListPageContainer>
  )
}

export default WhiskyList