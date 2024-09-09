import { WordFromCellsWithLetters } from '../../../../../../components/core';

import Styled from './WordPreview.style';
import TWordPreviewProps from './WordPreview.type';

const WordPreview = ({wordPreview}: TWordPreviewProps) => {   
  const wordInfo = {word: wordPreview, isOpened: false};
  
  return (
    <Styled.Wrapper>
      <WordFromCellsWithLetters wordInfo={wordInfo} isPreview />
    </Styled.Wrapper>
  )
};

export default WordPreview;