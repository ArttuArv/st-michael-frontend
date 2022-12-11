import styled from 'styled-components';

export const NotificationContainer = styled.div`
  color: #fff;
  background: ${props => props.type === 'alert' ? 'red' : 'green'};
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
`;