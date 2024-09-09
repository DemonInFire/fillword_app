import styled from "styled-components";

const Wrapper = styled.div<{$bgcolor: string, $isPreview: boolean | undefined, $isTwoColumns: boolean | undefined}>`
  width: ${props => props.$isPreview ? '25px' : props.$isTwoColumns ? '45px' : '72px'};
  height: ${props => props.$isPreview ? '25px' : props.$isTwoColumns ? '45px' : '72px'};
  margin: 6px;
  border-radius: ${props => props.$isPreview ? '4px' : props.$isTwoColumns ? '8px' : '16px'};
  background-color: ${props => props.$bgcolor};
  font-weight: 700;
  font-size: ${props => props.$isPreview ? '14px' : props.$isTwoColumns ? '25px' : '42px'};
  line-height: ${props => props.$isPreview ? '29px' : props.$isTwoColumns ? '50px' : '84.17px'};
  text-align: center;
  color: ${props => props.$isPreview ? '#4D4D4D' : '#FFFFFF'};
  transition: all .5s ease;
  user-select: none;

  @media (max-height: 1100px) {
    width: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '60px'};
    height: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '60px'};
    border-radius: ${props => props.$isPreview ? '2px' : props.$isTwoColumns ? '4px' : '8px'};
    font-size: ${props => props.$isPreview ? '18px' : props.$isTwoColumns ? '27px' : '45px'};
    line-height: ${props => props.$isPreview ? '23px' : props.$isTwoColumns ? '42px' : '63px'};
  }

  @media (max-height: 1000px) {
    width: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '48px'};
    height: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '48px'};
    border-radius: ${props => props.$isPreview ? '2px' : props.$isTwoColumns ? '4px' : '8px'};
    font-size: ${props => props.$isPreview ? '15px' : props.$isTwoColumns ? '27px' : '40px'};
    line-height: ${props => props.$isPreview ? '23px' : props.$isTwoColumns ? '42px' : '52px'};
  }

  @media (max-height: 900px) {
    width: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '42px'};
    height: ${props => props.$isPreview ? '20px' : props.$isTwoColumns ? '40px' : '42px'};
    border-radius: ${props => props.$isPreview ? '2px' : props.$isTwoColumns ? '4px' : '8px'};
    font-size: ${props => props.$isPreview ? '15px' : props.$isTwoColumns ? '27px' : '30px'};
    line-height: ${props => props.$isPreview ? '23px' : props.$isTwoColumns ? '42px' : '46px'};
  }

  @media (max-width: 500px) {
    width: ${props => props.$isPreview ? '13px' : props.$isTwoColumns ? '30px' : '36px'};
    height: ${props => props.$isPreview ? '13px' : props.$isTwoColumns ? '30px' : '36px'};
    border-radius: ${props => props.$isPreview ? '2px' : props.$isTwoColumns ? '4px' : '8px'};
    font-size: ${props => props.$isPreview ? '7px' : props.$isTwoColumns ? '22px' : '21px'};
    line-height: ${props => props.$isPreview ? '12px' : props.$isTwoColumns ? '29px' : '32px'};
  }
`;

const StyledCellWithLetter = {
  Wrapper
};

export default StyledCellWithLetter;