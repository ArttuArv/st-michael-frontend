import React from 'react'
import { 
  BLh1, 
  BLTable, 
  BLTableRow, 
  BLTableData, 
  BLTableBody, 
  BLTableContainer, 
  BLTableHeader, 
  BLTableWrapper 
} from './BeerListElements'

const BeerList = ({ beer }) => {

  return (    
    <div style = {{ paddingBottom: '80px'}}>             
      {beer.map(genre => (
        <BLTableContainer key = {genre.id}>
          <BLh1 key = {genre.id}>
            {genre.name}
          </BLh1>
          <BLTableWrapper>
            <BLTable>
              <BLTableBody>                  
                <BLTableRow>                
                  <BLTableHeader>Nimi</BLTableHeader>
                  <BLTableHeader>Tyyppi</BLTableHeader>
                  <BLTableHeader style = {{ textAlign: 'right' }}>Maa</BLTableHeader>
                </BLTableRow>
              </BLTableBody>                  
              <BLTableBody>
                {genre.products.map(beer => (
                  <BLTableRow key = {beer.id}>
                    <BLTableData style = {{ paddingRight: '10px' }}>{beer.name}</BLTableData>
                    <BLTableData style = {{ paddingRight: '10px' }}>{beer.style}</BLTableData>
                    <BLTableData style = {{ textAlign: 'right' }}>{beer.country}</BLTableData>
                  </BLTableRow>
                ))}
              </BLTableBody>
            </BLTable>  
          </BLTableWrapper>        
        </BLTableContainer>         
      ))}
    </div>    
  )
}

export default BeerList