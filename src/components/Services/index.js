import React from 'react'
import Icon1 from '../../assets/images/beer.png'
import Icon2 from '../../assets/images/beer.png'
import Icon3 from '../../assets/images/beer.png'
import { 
  ServicesContainer,  
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServicesH2, 
  ServicesP 
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id = 'services'>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src = {Icon1} />
          <ServicesH2>Uutisia</ServicesH2>
          <ServicesP>Hanasta löytyypi...</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src = {Icon2} />
          <ServicesH2>Juotavaa</ServicesH2>
          <ServicesP>Hanasta löytyypi sitäkin...</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src = {Icon3} />
          <ServicesH2>Jotain muuta mitä</ServicesH2>
          <ServicesP>Tähän voi laittaa kaikenlaista ja jotain muutakin...</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services