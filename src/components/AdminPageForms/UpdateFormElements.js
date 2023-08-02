import styled, { keyframes } from 'styled-components';

export const jitter = keyframes`
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(1.3) scaleX(1.3);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
`
export const FormContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 201;
  background-color: rgba(0, 0, 0, 0.8);
`

export const FormWrapperLarge = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 300px;
  height: 530px;
  border: 4px solid gold;
  background-color: #A69666;
  border-radius: 15px;
  padding: 1.7rem 1rem 1rem 1rem;
`

export const FormWrapperSmall = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 300px;
  height: 420px;
  border: 4px solid gold;
  background-color: #A69666;
  border-radius: 15px;
  padding: 1.7rem 1rem 1rem 1rem;
`

export const FormClose = styled.div`
  position: absolute;
  top: -8px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;  

  &:after {
    content: '\\00D7';  
    font-size: 30px; 
  }

  &:hover {
    opacity: 1;
    color: red;
    animation: ${jitter} 0.5s linear infinite;
  }
`

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`

export const FormInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  padding-left: 0.5rem;
  cursor: pointer;
`

export const FormSelect = styled.select`
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

export const FormButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 2rem;
  border: transparent;
  border-radius: 5px;
  background-color: gold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: green;
    color: #fff;
  }
`

export const FormH2 = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`

export const FormH4 = styled.h4`
  margin-top: 0.8rem;
  font-size: 1rem;
  line-height: 1.1rem;
`

export const FormP = styled.p`
  font-size: 0.8rem;
`