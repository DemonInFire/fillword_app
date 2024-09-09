import { useCallback, useEffect, useMemo, useState } from 'react';

import foundWordSound from '../../../../../assets/sounds/foundWordSound.mp3'
import winSound from '../../../../../assets/sounds/winSound.mp3'
import IWordInfo from '../../../../type/IWordInfo';

import { CircleWithLetters, WordPreview, Words } from './components';
import { WORDS_BY_LVL_NUMBER } from './const';
import Styled from './GameScreen.style';
import TGameScreenProps from './GameScreen.type';

const GameScreen = ({
  setIsLevelFinished, 
  currentLevelNumber,
  levelNumberToDisplay
}: TGameScreenProps) => {
  const wordsInfoListFromStorage: {wordsInfoList: Array<IWordInfo>, currentLevelNumber: number} = JSON.parse(localStorage.getItem('wordsInfoList'));    

  const [wordsInfoList, setWordsInfoList] = useState<Array<IWordInfo>>([]);  
  const [wordPreview, setWordPreview] = useState('');
  const [isMouseHold, setIsMouseHold] = useState(false);
  const [isAllWordsFound, setIsAllWordsFound] = useState(false);
  const [isHideScreen, setIsHideScreen] = useState(false);
  const [uniqueLetters, setUniqueLetters] = useState<Array<string>>([]);
  const [touchPosition, setTouchPosition] = useState({x: 0, y: 0});
  
  const wordsList = useMemo(() => WORDS_BY_LVL_NUMBER[currentLevelNumber].words, [currentLevelNumber]);

  const statusToWord = useMemo(() => {
    const newStatusToWord = new Map<string, IWordInfo>();

    if (wordsInfoListFromStorage?.wordsInfoList?.length > 0 && wordsInfoListFromStorage?.currentLevelNumber === currentLevelNumber) {
      wordsInfoListFromStorage.wordsInfoList.forEach(wordsInfo => newStatusToWord.set(wordsInfo.word, {word: wordsInfo.word, isOpened: wordsInfo.isOpened}));
    } else {
      for (const key of wordsList) {      
        newStatusToWord.set(key, {word: key, isOpened: false})
      };    
    }

    const newWordsInfoList = Array.from(newStatusToWord, ([,value]) => value).sort((a, b) => a.word.length - b.word.length);

    setWordsInfoList(newWordsInfoList);

    return newStatusToWord;
  }, []);  

  useEffect(() => {
    if (wordsInfoListFromStorage?.wordsInfoList?.length > 0 && wordsInfoListFromStorage?.currentLevelNumber === currentLevelNumber) {      
      setWordsInfoList(wordsInfoListFromStorage?.wordsInfoList);
    } else {
      localStorage.setItem('currentLevelNumber', JSON.stringify(currentLevelNumber));
    }

    window?.addEventListener('mousedown', () => setIsMouseHold(true), { capture: true });
    window?.addEventListener('mouseup', () => setIsMouseHold(false), { capture: true });
    window?.addEventListener('touchstart', () => setIsMouseHold(true), { capture: true });
    window?.addEventListener('touchend', () => {
      setIsMouseHold(false)
      setTouchPosition({x: 0, y: 0})
    }, { capture: true });

    return () => {
      window?.removeEventListener('mousedown', () => setIsMouseHold(true), { capture: true });
      window?.removeEventListener('mouseup', () => setIsMouseHold(false), { capture: true });
      window?.removeEventListener('touchstart', () => setIsMouseHold(true), { capture: true });
    window?.removeEventListener('touchend', () => {
      setIsMouseHold(false)
      setTouchPosition({x: 0, y: 0})
    }, { capture: true });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('wordsInfoList', JSON.stringify({wordsInfoList, currentLevelNumber}));
  }, [wordsInfoList]);

  const getUniqueLetters = (): Array<string> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const objWithLettersAndCount: any = {};

    wordsList.forEach(word => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const objWithLettersAndCountForOneWord: any = {};

      for (let i = 0; i < word.length; i++) {
        if (objWithLettersAndCountForOneWord[word[i]]) {
          objWithLettersAndCountForOneWord[word[i]].count += 1;
        } else {
          objWithLettersAndCountForOneWord[word[i]] = {count: 1};
        }
      }

      Object.keys(objWithLettersAndCountForOneWord).forEach((key: string) => {
        if (!objWithLettersAndCount[key] || objWithLettersAndCount[key].count < objWithLettersAndCountForOneWord[key].count) {
          objWithLettersAndCount[key] = objWithLettersAndCountForOneWord[key]
        }
      });
    });

    const newUniqueLettersList: Array<string> = [];

    Object.keys(objWithLettersAndCount).forEach((key: string) => {
      for (let i = 0; i < objWithLettersAndCount[key].count; i++) {
        newUniqueLettersList.push(key.toUpperCase());
      }
    });

    return newUniqueLettersList;
  };

  useEffect(() => {
    if (wordsList) {
      const lettersList = getUniqueLetters();

      setUniqueLetters(lettersList);
    }
  }, [wordsList]);

  useEffect(() => {
    if (isAllWordsFound) {
      setTimeout(() => {
        setIsHideScreen(true);
        new Audio(winSound).play();
      }, 1000);
      setTimeout(() => {
        setIsLevelFinished(true);
      }, 2000);
    }
  }, [isAllWordsFound]);

  const checkWord = useCallback(() => {    
    const foundWordInfo = wordsInfoList.find(wordInfo => wordInfo.word.toUpperCase() === wordPreview);

    if (foundWordInfo) {
      const foundSound = new Audio(foundWordSound);
      foundSound.play().catch(function (error) {
        console.log("Chrome cannot play sound without user interaction first")})

      statusToWord.set(foundWordInfo.word, {word: foundWordInfo.word, isOpened: true});

      setWordsInfoList(Array.from(statusToWord, ([,value]) => value).sort((a, b) => a.word.length - b.word.length));
    }

    if (wordsInfoList.length > 0 && !wordsInfoList.find(wordInfo => !wordInfo.isOpened)) {
      setIsAllWordsFound(true);
    }
  }, [statusToWord, wordPreview, wordsInfoList]);

  useEffect(() => {    
    if (!isMouseHold) {
      checkWord();
    }
  }, [isMouseHold, checkWord]);

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();

    const touch = event.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };
  
  return (
    <Styled.Wrapper onTouchMove={handleTouchMove}>
      <Styled.WrapperToHide $isHideScreen={isHideScreen}>
        <Styled.LevelTitle>Уровень {levelNumberToDisplay}</Styled.LevelTitle>
        <Words wordsInfoList={wordsInfoList} />
        <WordPreview wordPreview={wordPreview} />
        <CircleWithLetters 
          lettersList={uniqueLetters} 
          setWordPreview={setWordPreview} 
          wordPreview={wordPreview} 
          isMouseHold={isMouseHold}
          touchPosition={touchPosition}
        />
      </Styled.WrapperToHide>
    </Styled.Wrapper>
  )
};
  
export default GameScreen;