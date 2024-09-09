import styled from "styled-components";

const Wrapper = styled.div<{$left: number, $top: number, $isChecked: boolean}>`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${(props) => `${props.$isChecked ? '#E96FA4' : '#FFFFFF'}`};
  font-weight: 700;
  font-size: 42px;
  line-height: 84.17px;
  text-align: center;
  color: ${(props) => `${props.$isChecked ? '#FFFFFF' : '#58595B'}`};
  transition: all .5s ease;
  box-shadow: 0 5px #A6A8AB;
  position: absolute;
  left: ${(props) => `${props.$left}px`};
  top: ${(props) => `${props.$top}px`};

  @media (max-width: 500px) {
    width: 57px;
    height: 57px;
    font-size: 36px;
    line-height: 45px;
    box-shadow: 0 2.5px #A6A8AB;
  }
`;

const StyledCellWithLetter = {
  Wrapper
};

export default StyledCellWithLetter;