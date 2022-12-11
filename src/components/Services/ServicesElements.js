import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 550px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F5BD30;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 786px) {
    height: 1400px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  // margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  // padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
`;

export const ServicesCard = styled.div`
  background: #fffded;
  height: 400px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 30px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: gold;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;