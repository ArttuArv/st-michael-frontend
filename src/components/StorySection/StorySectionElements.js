import styled from 'styled-components';

export const StoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
`;

export const StoryPageGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  padding: 1rem;
  max-width: 1300px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
`;

export const StoryPageImageWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
 
  @media screen and (min-width: 600px) {
    // grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: 1fr;
  }
`;

export const StoryPageColumn2SpanRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-row: span 2;
  grid-row-start: 3;

  @media screen and (min-width: 600px) {
    grid-row: span 1;
  }
`;

export const StoryPageColumn2spanColumn = styled.div`
  display: grid;
  place-items: center;
  // flex-direction: column;
  // justify-content: center;
  width: 100%;
  height: 100%;
  grid-column: span 1;
  grid-row: span 2;

  @media (min-width: 1024px) {
    grid-column: span 2;
    grid-row: span 1;
`;

export const StoryPageImage = styled.img`
  width: 100%;
`;

export const StoryPageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #F5BD30;
`;

