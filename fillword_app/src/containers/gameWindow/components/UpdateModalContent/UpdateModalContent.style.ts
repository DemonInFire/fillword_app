import styled from "styled-components";

const Title = styled.h2`
  color: #4D4D4D;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  padding: 4px 20px 0;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 25px;
    margin-top: -5px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 28px 0 20px;
  display: flex;
  justify-content: center;
`;

const StyledGameWindow = {
  Title,
  ButtonWrapper
};

export default StyledGameWindow;