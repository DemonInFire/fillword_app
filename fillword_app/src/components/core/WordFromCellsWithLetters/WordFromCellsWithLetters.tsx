
import { CellWithLetter } from '../CellWithLetter';

import Styled from './WordFromCellsWithLetters.style';
import TWordFromCellsWithLettersProps from './WordFromCellsWithLetters.type';

const WordFromCellsWithLetters = ({
  wordInfo,
  isPreview,
  isTwoColumns
}: TWordFromCellsWithLettersProps) => {  
  return (
    <Styled.Wrapper>
      {wordInfo.word.toUpperCase().split('').map((letter, i) => (
        <CellWithLetter letter={letter} isOpened={wordInfo.isOpened} key={i} isPreview={isPreview} isTwoColumns={isTwoColumns}/>
      ))}
    </Styled.Wrapper>
  )
};
  
export default WordFromCellsWithLetters;