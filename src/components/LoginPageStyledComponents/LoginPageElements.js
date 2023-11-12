import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginPageContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 30px;
  color: gold;
  font-weight: bold;
`;

export const LoginPageH1 = styled.h2`
  font-size: 1.4rem;
  margin-top: 10px;
  align-self: center;
  text-align: center;
  color: gold;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    align-self: center;
  }
`;

export const LoginPageP = styled.p`
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 15px 15px;
    font-size: 1.5rem;
  }
`;

export const LoginPageH3 = styled.h3`
  font-size: ${props => props.fontsize === 'large' ? '3rem' : '1.5rem'};
  margin-top: ${props => props.fontsize === 'large' ? '10px' : '0px'};
  color: gold;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
`;

export const LoginPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  padding: 5px;
  background: #06260F;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 750px) {
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: 1fr;
    padding: 5px 5px;
  }
`;

export const LoginPageGridItem = styled.div`
  border: 1px solid #32231F;
  background: #A69666; 
  color: #32231F;
  padding: 10px;
  width: 100%;
  border-radius: 5px; 

  @media screen and (max-width: 500px) {
    padding: 5px 5px;
  }
`;

export const LoginPageButton = styled.button`
  padding: 10px;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  font-size: 1rem;
  background: ${props => props.background === 'light' ? '#06260F' : '#A69666'};
  color: ${props => props.background === 'light' ? 'gold' : '#06260F'};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    height: 60px;
  }
`;

export const LoginPageInputFormWrapper = styled.div`
  position: relative;  
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  font-weight: bold;
  color: #32231F;
  background: #A69666;
  border-radius: 5px;
  padding: 20px 10px;

`;

export const LoginPageRemoveButton = styled.button`
  padding: 10px;
  margin: 5px;
  width: 100%;
  border-radius: 5px;
  font-size: 0.9rem;
  background: #84172C;
  color: gold;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const LoginPageHideButton = styled.button`
  padding: 10px;
  margin: 0 0 1.5rem 0;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  font-size: 1rem;
  background: #17841D;
  color: gold;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    height: 60px;
  }
`;

export const LoginPageWhiskyViewContainer = styled.div`
  position: relative;
  margin: 5px 0px;
  background: #A69666;
  border-radius: 5px;
  padding: 5px;
`;

export const LoginPageWhiskyViewList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  background: #e4dfd1;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #32231F;

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const LoginPageWhiskyViewUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;

  @media screen and (max-width: 2225px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (max-width: 1955px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1685px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1225px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 625px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoginPageWhiskyViewLi = styled.li`
  list-style-type: none;
  font-size: 0.8rem;
  width: 100%;
  padding-left: 10px;
  text-align: start;
`;

export const LoginPageWhiskyRemoveButton = styled.button`
  max-width: 100px;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  background: #84172C;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.8rem;
    max-width: 100%;
    margin: 0 5px;
  }
`;

export const LoginPageWhiskyUpdateButton = styled.button`
  padding: 10px;
  max-width: 100px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  background: #06260F;
  color: gold;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;

export const LoginPageShortListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media screen and (max-width: 2225px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (max-width: 1955px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1685px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1225px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 625px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoginPageShortListGridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  background: #e4dfd1;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #32231F;
`;

export const LoginPageInfoButton = styled(motion.button)`
  position: absolute;
  top: 2px; 
  right: 12px; 
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`