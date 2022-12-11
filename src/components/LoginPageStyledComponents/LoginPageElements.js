import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 100%;
  text-align: center;
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

export const LoginPageH1 = styled.h1`
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: gold;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
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
  font-size: 3rem;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const LoginPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 10px;
  // margin: 20px;
  // border-radius: 5px;
  background: #06260F;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    font-size: 1.5rem;
    height: 60px;
  }
`;

export const LoginPageInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #32231F;
  background: #A69666;
  border-radius: 5px;
`;

export const LoginPageRemoveButton = styled.button`
  padding: 10px;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  font-size: 1rem;
  background: #84172C;
  color: gold; //#EFBC69;
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
