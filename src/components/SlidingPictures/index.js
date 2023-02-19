import React, { useState, useRef, useEffect } from 'react';
import { useSpring, useSprings } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { SPCard, SPContainer, SPCardWrapper, SPCardH1, SPCardContainer, } from './SlidingPicturesElements';
import { Link } from 'react-router-dom';
import ImageLinkCarousel from '../ImageLinkCarousel';

const images = [
  {
    id: 1,
    background: require('../../assets/images/kuva4.png'),
    header: 'Hanatuotteet',
    to: '/beer'
  },
  {
    id: 2,
    background: require('../../assets/images/kuva2.jpg'),
    header: 'Viskit',
    to: '/whisky'
  },
  // {
  //   id: 3,
  //   background: require('../../assets/images/kuva3.png'),
  //   header: 'Urheilu',
  //   to: '/sports'
  // },
  {
    id: 4,
    background: require('../../assets/images/st-michael-tunnelmakuva.jpg'),
    header: 'Tarina',
    to: '/story' 
  },
] 


const SlidingPictures = () => {
  const [style, setStyle] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia); 
  });

  const bind = useScroll(event => {
    setStyle.start({transform: `perspective(500px) rotateY(${event.scrolling 
      ? clamp( event.delta[0] ) 
      : 0 }deg)`
    });
  });

  const clamp = (value, clampAt = 5) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };


  return (
    <>
      {isDesktop ? ( 
        <>
        </>
        // <SPContainer { ...bind() } >
        //   {images.map(src => (
        //     <SPCardContainer key={src.header}>          
        //       <SPCard style = {{ ...style, backgroundImage: `url(${src.background})` }}>
        //         <Link to = {src.to} style = {{textDecoration: 'none'}}>
        //           <SPCardWrapper>
        //             <SPCardH1>{src.header}</SPCardH1>
        //           </SPCardWrapper>
        //         </Link>
        //       </SPCard> 
        //     </SPCardContainer>        
        //   ))}
        // </SPContainer> )
        )
        : (
          <ImageLinkCarousel style={{padding: "100px"}} slides = {images} />         
        )
      }
    </>
  );
}

export default SlidingPictures