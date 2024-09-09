import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 640px;
  height: 100%;
  background-color: #2B344B;
`;

const LevelTitle = styled.header`
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  padding-top: 27px;
  text-align: center;

  @media (max-width: 500px) {
    padding-top: 10px;
  }
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

const StyledGameScreen = {
  Wrapper,
  LevelTitle,
  WrapperToHide
};

export default StyledGameScreen;