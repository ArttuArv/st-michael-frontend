import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { 
  BLh2, 
  BLTable, 
  BLTableRow, 
  BLTableData, 
  BLTableBody, 
  BLTableContainer, 
  BLTableHeader, 
  BLTableWrapper 
} from './BeerListElements'

const BeerList = ({ beer }) => {
  const { t } = useTranslation()

  beer.map(category => category.products.sort((a, b) => a.country.localeCompare(b.country)))  

  return (    
    <div style = {{ paddingBottom: '80px'}}>             
      {beer.map(category => (
        <BLTableContainer key = {category.id}>
          <BLh2 key = {category.id}>
            {category.name}
          </BLh2>
          <BLTableWrapper>
            <BLTable>
              <BLTableBody>                  
                <BLTableRow>                
                  <BLTableHeader>{t('tuotteet.nimi')}</BLTableHeader>
                  <BLTableHeader>{t('tuotteet.tyyppi')}</BLTableHeader>
                  <BLTableHeader style = {{ textAlign: 'right' }}>{t('tuotteet.maa')}</BLTableHeader>
                </BLTableRow>
              </BLTableBody>                  
              <BLTableBody>
                {category.products.map(beer => (
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

BeerList.propTypes = {
  beer:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          style: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        })
      )
    })
  )
}