import { Link } from "react-router-dom"
import styled from 'styled-components';

const Missing = () => {
  return (
    <MissingContainer>
      <MissingWrapper>
        <h2>Oops!</h2>
        <p>Page Not Found</p>
        <FlexGrow>
          <MissingLink 
            to="/">Visit Our Homepage 
          </MissingLink>
        </FlexGrow>
      </MissingWrapper>
    </MissingContainer>
  )
}

export default Missing

const MissingLink = styled(Link)`
  text-decoration: none;
  color: #32231F;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 1px solid #32231F;
  border-radius: 5px;
  background: #A69666;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(255, 203, 5, 0.9);
    color: gold;
    background: #32231F;
  }
`
const FlexGrow = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const MissingWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background: #A69666;
  color: #32231F;
  border-radius: 5px;
  border: 1px solid #32231F;
  margin: 10px;
`

const MissingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 60px);
`