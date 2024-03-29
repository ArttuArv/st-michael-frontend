import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  border-top: 3px solid #F5BD30;
  border-bottom: 4px solid #F5BD30;
  background-color: #25361E;             //#06260F;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  max-width: 1800px;
  width: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
    grid-gap: 2rem;
  }

  @media screen and (max-width: 925px) {
    grid-template-columns: repeat(1, 1fr);
    width: 70%;
  }
`;

export const FooterGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 600px;

  @media screen and (max-width: 1200px) {
    
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const FooterRow = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 50px 0;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const FooterLogo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: flex-start;
  width: 150px;
`;

export const FooterLinkItems = styled.div`    // LinkHeading
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  // max-width: 160px;
  width: 150px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    margin: 0;
    padding: 10px;
    // width: 100%;
    align-items: center;
  }
`;

export const FooterLinkTitle = styled.h1`
  color: #F5BD30;
  font-size: 20px;
  margin-bottom: 4px;
  padding-left: 5px;
`;

export const FooterLink = styled(Link)`
  color: #F5BD30;
  text-decoration: none;
  font-size: 16px;
  padding: 5px;

  &:hover {
    color: #F5BD30;
    font-weight: bold;
    transition: 0.3 ease-out;
  }

  @media screen and (max-width: 1000px) {
    // padding: 10px;
`;

export const SocialMedia = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const SocialMediaP = styled.p`
  color: #F5BD30;
  font-size: 16px;
  text-align: center;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 240px;
  margin-top: 15px;
`;

export const SocialMediaIconLink = styled.a`
  color: #F5BD30;
  font-size: 24px;

  &:hover {
    color: #FDEA9F;
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
`;

export const FooterTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTable = styled.table`
  width: 100%;
  color: #F5BD30;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 16px;
`;

export const FooterTableBody = styled.tbody`

`;

export const FooterTableRow = styled.tr`

`;

export const FooterTableData = styled.td`
  padding: 5px;
`;

export const FooterTableH3 = styled.h3`
  color: #F5BD30;
  font-size: 20px;
  margin-bottom: 4px;
  padding-left: 5px;
`;

export const FooterImage = styled.img`
  width: 100%;
  margin-top: -70px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 1400px) {
    margin-top: 0px;
  }

`;