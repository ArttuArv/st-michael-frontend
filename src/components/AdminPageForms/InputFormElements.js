import styled from 'styled-components';

export const InputFormButton = styled.button`
  padding: 10px;
  margin-top: 5px;
  width: 100%;
  height: 100%;
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
    font-size: 1.5rem;
    height: 100%;
  }
`;

export const InputFormH2 = styled.h2`
  font-size: 3rem;
  margin: 0 10px;
  color: #06260F;
  text-align: center;
  color: gold;
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
`;

export const InputFormP = styled.p`
`;

export const InputFormForm = styled.form`
  // width: 100%;
  // max-width: 700px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // margin: 0 auto;
  // padding: 10px;
`;

export const InputFormItems = styled.div`
  width: 100%;
  padding: 2px;
  font-size: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const InputFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 1rem;
  background: #FFFFE0;
  color: #32231F;
  font-weight: bold;
  border: 1px solid gold;
  text-align: center;
  
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    height: 60px;
  }
`;

export const InputFormLabel = styled.label`
`;

export const InputFormSelect = styled.select`
  width: 100%;
  max-width: 700px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 1rem;
  background: #FFFFE0;
  color: #32231F;
  font-weight: bold;
  border: 1px solid gold;
  text-align: center;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    height: 60px;
  }
`;

export const InputFormOption = styled.option`
  width: 100%;
  // max-width: 300px;
  // margin: 5px;
  // border-radius: 5px;
  // font-size: 1rem;
  // background: #FFFFE0;
  // color: #32231F;
  // font-weight: bold;
  // border: 1px solid gold;
  // text-align: center;
  line-height: 50px;
`;
