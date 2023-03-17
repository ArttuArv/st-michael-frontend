import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  minHeight: 600px;
  width: 100%;
  padding-top: 80px;
  background: #06260F;

  @media screen and (max-width: 960px) {
    padding-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;  

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Image = styled.img`
  width: 100%;
  border-bottom: 3px solid #D4A24E;
  border-top: 3px solid #D4A24E;
  border-collapse: collapse;
`;

export const WhiskyListPageContainer = styled.div`
  padding-top: 70px;
  // padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const WhiskyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #06260F;

  @media screen and (max-width: 950px) {
    padding: 0 20px;
  }
`;

export const WhiskyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  background-color: #06260F;
`;

export const WhiskyListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  background-color: #FBE5AC;
  border: 2px solid #F5BD30;
  padding: 5px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const WhiskyListH1 = styled.h2`
  color: #F5BD30;
  font-weight: 400;
  font-size: 44px;          //calc(45px + (20 - 4) * ((100vw - 1000px) / (1600 - 600)));    // font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const WhiskyPageHeaderH2 = styled.h3`
  color: #F5BD30;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 24px;

  }

  @media screen and (max-width: 500px) {
    font-size: 19px;
  }
`;

export const WhiskyListH2 = styled.h2`
  color: #F5BD30;
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;

  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;

export const WhiskyListH3 = styled.h3`
  font-size: calc(14px + (16 - 14) * ((100vw - 1000px) / (1300 - 600)));     //font-size: 14px;
  margin-bottom: 10px;
  font-weight: 700;
  width: 100%;
  color: #000;
  text-align: left;
`;

export const WhiskyListP = styled.p`
  font-size: calc(14px + (16 - 14) * ((100vw - 1000px) / (1300 - 600)));  // font-size: 16px;
  font-weight: 400;
  width: 100%;
  color: #000;
  padding: 10px;
  text-align: left;
`;

export const WhiskyListNav = styled.nav`
  display: flex;
  background-color: #06260F;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const WhiskyListLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const WhiskyListMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
`;

export const WhiskyListMenuItem = styled.li`
  font-size: 1.2rem;
  height: 30px;
  margin-top: 20px;

  @media screen and (max-width: 920px) {
    flex-basis: 100%;
  }
`;

export const WhiskyListLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #F5BD30;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  Z-index: 1; 
  line-height: 1; 

  &:hover {
    border-bottom: 3px solid #F5BD30;
    transition: 0.1s ease-in-out;    
  }
`;

export const WhiskyListInput = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #F5BD30;
  border-radius: 30px;
  padding: 0 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  text-align: center;
  color: #000;
  background-color: #FBE5AC;
  outline: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    border-bottom: 3px solid #F5BD30;
    transition: 0.1s ease-in-out;
  }
`;
