import styled from "styled-components";

const Wrapper = styled.div<{$isTwoColumns: boolean}>`
  margin-top: 57px;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.$isTwoColumns ? 2 : 1},1fr)`};

  @media (max-height: 900px) {
    margin-top: 40px;
  }

  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

const StyledWords = {
  Wrapper
};

export default StyledWords;