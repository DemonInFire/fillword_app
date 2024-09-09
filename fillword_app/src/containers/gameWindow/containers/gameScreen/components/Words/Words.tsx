
import { WordFromCellsWithLetters } from '../../../../../../components/core';

import Styled from './Words.style';
import TWordsProps from './Words.type';

const Words = ({wordsInfoList}: TWordsProps) => {     
  const isTwoColumns = wordsInfoList.length > 6;  

  const wordsWithFiveLettersOrLess = wordsInfoList.filter(wordInfo => wordInfo.word.length <= 5);
  const wordsWithSixLettersOrMore = wordsInfoList.filter(wordInfo => wordInfo.word.length > 5);  

  return (
    <>
      <Styled.Wrapper $isTwoColumns={isTwoColumns}>
        {wordsWithFiveLettersOrLess.map((wordInfo, i) => (
          <WordFromCellsWithLetters wordInfo={wordInfo} isTwoColumns={isTwoColumns} key={i}/>
        ))}
      </Styled.Wrapper>
      {wordsWithSixLettersOrMore.map((wordInfo, i) => (
        <WordFromCellsWithLetters wordInfo={wordInfo} isTwoColumns={isTwoColumns} key={i}/>
      ))}
    </>
  )
};
  
export default Words;