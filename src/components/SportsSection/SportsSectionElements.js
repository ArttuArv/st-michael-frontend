import styled from 'styled-components';

export const SportsGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  width: max(100%, 260px);

  @media (min-width: 600px) {
    margin: 50px 0;
  }
`;


export const SportGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-columns: minmax(1em, 1fr) repeat(1, minmax(10rem, 30rem)) minmax(1em, 1fr);
  grid-gap: 1rem;
  max-width: 600px;

  @media (min-width: 1100px) {
    max-width: 1200px;
    grid-template-columns: 1fr 1fr;
    // grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(10rem, 30rem)) minmax(1em, 1fr);
  }
`;

export const SportsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #F5BD30;
  font-size: clamp(0.8rem, 4vw, 1.2rem);
  text-align: left;
  grid-column: span 1 / 2;
  padding: 0 10px;
`;

export const SportsTextWrapper2col = styled.div`
  display: flex;
  flex-direction: column;
  color: #F5BD30;
  font-size: clamp(0.8rem, 4vw, 1.2rem);
  text-align: left;
  grid-column: span 1 / 2;
  padding: 0 10px;

  @media (min-width: 1100px) {
    grid-column: span 1 / 3;
    grid-row: span 1 / 2;
  }
`;

