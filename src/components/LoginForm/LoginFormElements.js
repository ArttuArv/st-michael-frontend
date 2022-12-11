import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  background: gold;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 5px 5px;
`; 

export const LoginFormH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const LoginFormP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const LoginFormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const LoginFormInput = styled.input`
  padding: 10px;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-size: 2rem;
`;

export const LoginFormButton = styled.button`
  padding: 10px;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  font-size: 1rem;
  background: #06260F;
  color: gold;
  cursor: pointer;
  font-size: 2rem;
`;