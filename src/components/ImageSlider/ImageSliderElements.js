import styled from 'styled-components';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';

export const ImageSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #010606;
  padding: 35px;
  overflow: hidden;
`;

export const ImageSliderImageWrapper = styled.div`
`;

export const ImageSliderImage = styled.img`
  border-radius: 10px;
  width: 500px;
  height: 400px;
  border: 1px solid #F5BD30;
`;

export const ImageSliderLeftArrow = styled(FaArrowCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 2rem;
  color: gold;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  :hover {
    transform: scale(1.5);
    color: #C49726;
    transition: 0.2 ease-in-out;
  }
`;

export const ImageSliderRightArrow = styled(FaArrowCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 2rem;
  color: gold;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  :hover {
    transform: scale(1.5);
    color: #C49726;
    transition: 0.2 ease-in-out;
  }
`;
