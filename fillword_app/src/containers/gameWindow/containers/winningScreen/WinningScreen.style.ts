import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 640px;
  height: 100%;
  background-color: #2B344B;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const WrapperToHide = styled.div<{$isHideScreen: boolean}>`
  visibility: ${props => props.$isHideScreen ? 'hidden' : 'visible'};
  animation: ${props => props.$isHideScreen ? fadeOut : fadeIn} 1s linear;
  transition: visibility 1s linear;
`;

const FirstTitle = styled.header`
  font-weight: 700;
  font-size: 37px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;
  padding-top: 257px;

  @media (max-width: 500px) {
    font-size: 27px;
  }
`;

const SecondTitle = styled.span`
  font-weight: 700;
  font-size: 53px;
  line-height: 48.71px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  display: block;
  padding-top: 20px;

  @media (max-width: 500px) {
    font-size: 39px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 347px;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    margin-top: 147px;
  }
`;

const StyledGameWinning = {
  Wrapper,
  WrapperToHide,
  FirstTitle,
  SecondTitle,
  ButtonWrapper
};

export default StyledGameWinning;