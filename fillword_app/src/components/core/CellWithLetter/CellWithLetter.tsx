import Styled from './CellWithLetter.style';
import TCellWithLetterProps from './CellWithLetter.type';

const CellWithLetter = ({letter, isOpened, isPreview, isTwoColumns}: TCellWithLetterProps) => {  
  return (
    <Styled.Wrapper 
      $bgcolor={isOpened ? '#65BD65' : '#FFFFFF'} 
      $isPreview={isPreview}
      $isTwoColumns={isTwoColumns}
    >
      {letter}
    </Styled.Wrapper>
  )
};
  
export default CellWithLetter;