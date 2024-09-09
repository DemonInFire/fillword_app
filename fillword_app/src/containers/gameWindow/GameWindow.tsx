import { useEffect, useState } from 'react';

import { Modal } from '../../components/core';

import Styled from './GameWindow.style';
import { GameScreen, WinningScreen } from './containers';
import { WORDS_BY_LVL_NUMBER } from './containers/gameScreen/const';
import { UpdateModalContent } from './components';

const GameWindow = () => {
  const isLevelFinishedFromStorage = JSON.parse(localStorage.getItem('isLevelFinished'));
  const currentLevelNumberFromStorage = JSON.parse(localStorage.getItem('currentLevelNumber'));
  const levelNumberToDisplayFromStorage = JSON.parse(localStorage.getItem('levelNumberToDisplay'));

  const [isLevelFinished, setIsLevelFinished] = useState(isLevelFinishedFromStorage);
  const [currentLevelNumber, setCurrentLevelNumber] = useState<keyof typeof WORDS_BY_LVL_NUMBER>(currentLevelNumberFromStorage ?? 1);
  const [levelNumberToDisplay, setLevelNumberToDisplay] = useState<number>(levelNumberToDisplayFromStorage ?? 1);
  const [isStorageHasChanged, setIsStorageHasChanged] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLevelFinished', JSON.stringify(isLevelFinished));
  }, [isLevelFinished]);

  useEffect(() => {
    localStorage.setItem('currentLevelNumber', JSON.stringify(currentLevelNumber));
  }, [currentLevelNumber]);

  useEffect(() => {
    localStorage.setItem('levelNumberToDisplay', JSON.stringify(levelNumberToDisplay));
  }, [levelNumberToDisplay]);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setIsStorageHasChanged(true);
    }, { capture: true });

    return () => {
      window.removeEventListener('storage', () => {
        setIsStorageHasChanged(true);
      }, { capture: true });
    };
  }, []);

  return (
    <Styled.Wrapper>
      {isStorageHasChanged &&
        <Modal isModalOpen={isStorageHasChanged}>
          <UpdateModalContent />
        </Modal>
      }
      {isLevelFinished ?
        <WinningScreen 
          setCurrentLevelNumber={setCurrentLevelNumber} 
          setIsLevelFinished={setIsLevelFinished}
          currentLevelNumber={currentLevelNumber}
          levelNumberToDisplay={levelNumberToDisplay}
          setLevelNumberToDisplay={setLevelNumberToDisplay}
        /> 
      :
        <GameScreen 
          setIsLevelFinished={setIsLevelFinished} 
          currentLevelNumber={currentLevelNumber}
          levelNumberToDisplay={levelNumberToDisplay} 
        />
      }
    </Styled.Wrapper>
  )
};
  
export default GameWindow;