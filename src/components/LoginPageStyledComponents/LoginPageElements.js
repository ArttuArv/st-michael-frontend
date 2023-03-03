import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 100%;
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
  font-size: ${props => props.fontsize === 'large' ? '3rem' : '1.5rem'};
  margin-top: ${props => props.fontsize === 'large' ? '10px' : '0px'};
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
  width: 100%;
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

export const LoginPageWhiskyUpdateButton = styled.button`
  padding: 10px;
  width: 100%;
  margin: 0 5px;
  max-width: 80px;
  border-radius: 5px;
  font-size: 1rem;
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
    font-size: 1.5rem;
    height: 60px;
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
  margin: 5px;
  background: #A69666;
  border-radius: 5px;
  padding: 5px;
`;

export const LoginPageWhiskyViewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  border-bottom: 1px solid #32231F;
`;

export const LoginPageWhiskyViewUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;

  @media screen and (max-width: 1310px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1075px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoginPageWhiskyViewLi = styled.li`
  width: 100%;
  padding-left: 10px;
  text-align: start;
  align-self: center;
`;

export const LoginPageWhiskyRemoveButton = styled.button`
  max-width: 100px;
  padding: 5px;
  border-radius: 5px;
  font-size: 1rem;
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
    font-size: 1.5rem;
  }
`;
