import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 1050px;
  width: 100%;
  position: relative;
  z-index: 1;
  user-select: none;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.8) 10%, 
      rgba(0, 0, 0, 0.3) 100%),
      linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.2) 0%, 
        transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    min-height: 850px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1920px) {
    max-width: 800px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 24px;
    margin-top: -150px;
  }
`;

export const HeroLogo = styled.img`
  height: 100%;
  width: 100%;
  margin-top: -70px;

  @media screen and (max-width: 1920px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
`;

export const HeroH1 = styled.h1`
  color: #F5BD30;
  font-size: 45px;
  text-align: center;
  text-shadow: 3px 5px 3px #000;
  margin-bottom: 8px;

  @media screen and (max-width: 1920px) {
    font-size: 40px;
  }

  @media screen and (max-width: 983px) {
    font-size: 35px;
  }

  @media screen and (max-width: 899px) {
    font-size: 30px;
  }

  @media screen and (max-width: 545px) {
    font-size: 25px;
  }
  
`;

export const HeroH3 = styled.h3`
  color: #F5BD30;
  font-size: 35px;
  text-align: center;
  text-shadow: 3px 5px 3px #000;
  margin-bottom: 8px;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroP = styled.p`
  color: #F5BD30;
  font-size: 28px;
  text-align: center;
  max-width: 600px;
  text-shadow: 2px 4px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }  
`;

export const HeroTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;  
  text-shadow: 3px 5px 3px #000;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const HeroTableBody = styled.tbody`
`;

export const HeroTableRow = styled.tr`
  // border-bottom: 3px solid #F5BD30;
  // box-shadow: 3px 5px 3px #000;
`;

export const HeroTableHead = styled.th`
  padding: 4px;
  color: #F5BD30;
  text-align: left;
  text-shadow: 3px 5px 3px #000;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.5);
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

