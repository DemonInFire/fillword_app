
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import { CircleWithLetter } from '../../../../../../components/core';
import { TWordPreviewStatusesValues } from '../../../../../../consts/changeWordPreviewStatuses';

import Styled from './CircleWithLetters.style';
import TCircleWithLettersProps from './CircleWithLetters.type';
import angels from './consts/angels';

const CircleWithLetters = ({
  lettersList, 
  wordPreview, 
  setWordPreview,
  isMouseHold,
  touchPosition
}: TCircleWithLettersProps) => {   
  const size = isMobile ? 175 : 230;
  const symbolSize = isMobile ? 60 : 80;

  const angelList: Array<number> = angels[lettersList.length];

  const radius = size / 2;
  const center = radius;

  const [lastSelectedLetterIdList, setLastSelectedLetterIdList] = useState<Array<string>>([]);  

  const degToRad = (deg:number) => {
    return deg * Math.PI / 180;
  }

  const calculateCoordinats = (deg: number) => {
    const angleRad = degToRad(deg);
    const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
    const y = radius * Math.sin(angleRad) + center - symbolSize / 2;

    return {
      x:  x,
      y: y
    }
  };

  const changeWordPreview = (status: TWordPreviewStatusesValues, letter?: string) => {
    switch(status) {
      case 'remove': 
        setWordPreview(wordPreview.slice(0, -1));
        break
    
      case 'add':
        setWordPreview(wordPreview + letter);
        break

      case 'clear':
        setWordPreview('');
        break
    
      default:
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Circle>
        {lettersList.map((letter, i) => {
          const coordinates = calculateCoordinats(angelList[i]);   

          return (
            <CircleWithLetter 
              letter={letter} 
              left={coordinates.x - 10} 
              top={isMobile ? coordinates.y - 15 : coordinates.y - 20} 
              touchPosition={touchPosition}
              isMouseHold={isMouseHold}
              lastSelectedLetterIdList={lastSelectedLetterIdList}
              setLastSelectedLetterIdList={setLastSelectedLetterIdList}
              changeWordPreview={changeWordPreview}
              id={`${i}`}
              key={i} 
            />
          )
        })}
      </Styled.Circle>
    </Styled.Wrapper>
  )
};
  
export default CircleWithLetters;