import styled from 'styled-components';

export const TogglableButton = styled.button`
  padding: 10px;
  margin: 1rem;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  font-size: 1rem;
  background: ${props => props.background === 'add' ? '#06260F' : '#84172C'};
  color: gold;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const TogglableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  position: relative;
`;