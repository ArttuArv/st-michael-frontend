import styled from 'styled-components';
import { animated } from 'react-spring';

export const SPContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.3rem;
  padding: 1.3rem;
  overflow-x: auto;
  width: 100%;
  background-color: #010606;

  ::-webkit-scrollbar {
    height: 0.75rem;
  }

  ::-webkit-scrollbar-track {
    background: #010606;
  }

  ::-webkit-scrollbar-thumb {
    background: #F5BD30;
    border-radius: 10px;
  }

  @media (min-width: 600px) {
`;

export const SPCardContainer = styled.div`

  &:hover {
    transform: scale(0.99);
    transition: all 0.1s ease-in-out;
  }
`;

export const SPCard = styled(animated.div)`
  flex-shrink: 0;
  min-width: 550px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #F5BD30;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 600px) {
    min-width: 550px;
`;

export const SPCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const SPCardH1 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  padding: 10px;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.8);
  user-select: none;
`;