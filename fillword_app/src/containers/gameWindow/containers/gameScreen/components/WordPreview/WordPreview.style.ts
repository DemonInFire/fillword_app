import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 19px;
  height: 25px;
  width: 100%;
  user-select: none;

  @media (max-height: 900px) {
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

const StyledWordPreview = {
  Wrapper,
};

export default StyledWordPreview;