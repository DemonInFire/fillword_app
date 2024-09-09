import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 99px;
  width: 100%;
  user-select: none;

  @media (max-height: 900px) {
    margin-top: 60px;
  }

  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
	height: 200px;
	width: 200px;
	border: 20px solid #3E4A68;
  margin: auto;
  position: relative;

  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const StyledCircleWithLetters = {
  Wrapper,
  Circle
};

export default StyledCircleWithLetters;