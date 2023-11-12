import styled from 'styled-components';

export const BLTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #06260F;
  padding-top: 80px;

  @media screen and (max-width: 370px) {
    padding-top: 20px;
  }
`;

export const BLTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  background-color: #06260F;
  max-width: 1200px;

  @media screen and (max-width: 1700px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1300px) {
    max-width: 800px;
  }
`;

export const BLTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  // border-bottom: 3px solid #D4A24E;
`;

export const BLTableBody = styled.tbody`
  color: #F5BD30;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 370px) {
    padding-top: 5px;
  }
`;

export const BLTableRow = styled.tr`
  border-bottom: 1px dashed #D4A24E;
  width: 100%;
`;

export const BLTableHeader = styled.th`
  color: #F5BD30;
  font-weight: 700;
  padding-bottom: 10px;
  text-align: left;
  font-size: calc(14px + (16 - 14) * ((100vw - 1000px) / (1300 - 600)));
`;

export const BLTableData = styled.td`
  color: #F5BD30;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: calc(14px + (16 - 14) * ((100vw - 1300px) / (1300 - 600)));
`;

export const BLh2 = styled.h2`
  color: #F5BD30;
  font-weight: 400;
  font-size: 38px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 850px) {
    font-size: 32px;
  }

  @media screen and (max-width: 650px) {
    font-size: 28px;
  }
`;

export const BLh3 = styled.h3`
  color: #F5BD30;
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;