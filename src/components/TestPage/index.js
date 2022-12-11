import React from 'react'
import { FlexContainer, GridContainer, Card, InnerGridContainer, GridWrapper } from './TestPageElements'
import ImageCarousel from '../ImageCarousel'

const images = {
  first: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  second: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  third: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}
const Test = () => {
  return (
    // <div style = {{margin: '100px 0'}}>
    //   <FlexContainer>
    //     <GridWrapper>
    //       <InnerGridContainer>
    //         <Card style = {{ }}>1</Card>
    //         <Card style = {{ }}>2</Card>
    //         <Card style = {{ }}>3</Card>
    //         <Card>4</Card>
    //         <Card>5</Card>
    //         <Card>6</Card>
    //         <Card>7</Card>
    //         <Card>8</Card>
    //         <Card>9</Card>
    //         <Card>10</Card>
    //         <Card>11</Card>
    //         <Card>12</Card>
    //       </InnerGridContainer>
    //       <GridContainer>
    //         <Card style = {{ backgroundColor: 'red'}}>
    //           <InnerGridContainer>
    //             <Card style = {{ backgroundColor: 'blue'}}>1</Card>
    //             <Card style = {{ backgroundColor: 'blue'}}>2</Card>
    //             <Card style = {{ backgroundColor: 'blue'}}>3</Card>
    //             <Card style = {{ backgroundColor: 'blue'}}>4</Card>
    //           </InnerGridContainer>
    //         </Card>
    //         <Card style = {{ backgroundColor: 'red'}}>22</Card>
    //         <Card style = {{ backgroundColor: 'red'}}>23</Card>
    //         <Card style = {{ backgroundColor: 'red'}}>24</Card>
    //         <Card style = {{ backgroundColor: 'red'}}>25</Card>
    //         <Card style = {{ backgroundColor: 'red'}}>26</Card>
    //       </GridContainer>
    //       <GridContainer>
    //         <Card style = {{ backgroundColor: 'brown'}}>31</Card>
    //         <Card style = {{ backgroundColor: 'brown'}}>32</Card>
    //         <Card style = {{ backgroundColor: 'brown'}}>33</Card>
    //         <Card style = {{ backgroundColor: 'brown'}}>34</Card>
    //         <Card style = {{ backgroundColor: 'brown'}}>35</Card>
    //         <Card style = {{ backgroundColor: 'brown'}}>36</Card>
    //       </GridContainer>
    //     </GridWrapper>
    //   </FlexContainer>
    // </div>
    <div style = {{}}>
      <ImageCarousel />
    </div>
  )
}

export default Test