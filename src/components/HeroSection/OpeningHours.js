import React from 'react'
import { 
  HeroTableWrapper,
  HeroTable,
  HeroTableBody,
  HeroTableRow,
  HeroTableHead, 
} from './HeroElements'


const OpeningHours = ({ openingHours }) => {

  return (
    <HeroTableWrapper>
      <HeroTable> 
        <HeroTableBody>
          {openingHours.map((item) => (
            <HeroTableRow key = {item.id}>
              <HeroTableHead key={item.id}>{item.day}</HeroTableHead>
              <HeroTableHead style={{ textAlign: 'right' }}>{item.openinghours}</HeroTableHead>
            </HeroTableRow>
          ))}
        </HeroTableBody>
       </HeroTable>
    </HeroTableWrapper>
  )
}

export default OpeningHours
