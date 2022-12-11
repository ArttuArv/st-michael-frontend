import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  max-width: 1300px;
  width: min(95% 70rem);
  width: 100%;
  display: grid;
  gap: 1rem;
  // place-items: center;
  // grid-template-columns: repeat(4, [col] 150px ) ;
  // grid-template-rows: repeat(2, [row] auto  );
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr ));
  grid-gap: 1rem;
  width: 100%;
`;

export const InnerGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gold;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.05rem 0.1rem, rgba(2, 8, 20, 0.1) 0px 0.055rem 0.1rem;
  // transition: all 0.2s ease-in-out;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid blue;
  font-size: 3rem;

  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35rem 1.175rem, rgba(2, 8, 20, 0.08) 0px 0.175rem 0.5rem;
    transform: translateY(-3px) scale(1.1);
  }

  @media (min-width: 463px) {
    font-size: 5rem;
    grid-column: span 2 / auto;
    grid-row: span 2 / auto;
  }

  :last-child {
    color: white;
    grid-row-start: 1;
  }
`;