import { useState } from 'react';

import { WORDS_BY_LVL_NUMBER } from '../gameScreen/const';
import { Button } from '../../../../components/core';

import Styled from './WinningScreen.style';
import TWinningScreenProps from './WinningScreen.type';

const WinningScreen = ({
  setCurrentLevelNumber,
  setIsLevelFinished,
  setLevelNumberToDisplay,
  levelNumberToDisplay,
  currentLevelNumber
}: TWinningScreenProps) => {
  const [isHideScreen, setIsHideScreen] = useState(false);

  const nextLevel = currentLevelNumber + 1 <= Object.keys(WORDS_BY_LVL_NUMBER).length ? currentLevelNumber + 1 : 1;

  const onClick = () => {
    setIsHideScreen(true);
    
    setTimeout(() => {
      // @ts-expect-error: Unreachable code error
      setCurrentLevelNumber(nextLevel);
      setLevelNumberToDisplay(levelNumberToDisplay + 1);
      setIsLevelFinished(false);
    }, 1000);
  };
  
  return (
    <Styled.Wrapper>
      <Styled.WrapperToHide $isHideScreen={isHideScreen}>
        <Styled.FirstTitle>Уровень {levelNumberToDisplay} пройден</Styled.FirstTitle>
        <Styled.SecondTitle>Изумительно!</Styled.SecondTitle>
        <Styled.ButtonWrapper>
          <Button onClick={onClick} title={`Уровень ${levelNumberToDisplay + 1}`} />
        </Styled.ButtonWrapper>
      </Styled.WrapperToHide>
    </Styled.Wrapper>
  )
};
  
export default WinningScreen;