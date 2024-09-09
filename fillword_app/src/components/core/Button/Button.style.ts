import styled from "styled-components";

const Button = styled.button`
  color: #FFFFFF;
  width: 330px;
  height: 94px;
  background-color: #65BD65;
  font-size: 40px;
  line-height: 36.76px;
  font-weight: 700;
  border-radius: 40px;
  box-shadow: 0 5px #508853;
  border: none;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 250px;
    font-size: 32px;
    height: 70px;
    padding-bottom: 10px;
  }
`;

const StyledButton = {
  Button
};

export default StyledButton;