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
          {openingHours.map( (item) => (
            <HeroTableRow key = {item.id}>
              <HeroTableHead>{item.day}</HeroTableHead>
              <HeroTableHead>{item.openinghours}</HeroTableHead>
            </HeroTableRow>
          ))}
        </HeroTableBody>
      </HeroTable>
    </HeroTableWrapper>
  )
}

export default OpeningHours