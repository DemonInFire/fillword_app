import { WORDS_BY_LVL_NUMBER } from "../gameScreen/const";

type TWinningScreenProps = {
  setCurrentLevelNumber: React.Dispatch<React.SetStateAction<keyof typeof WORDS_BY_LVL_NUMBER>>,
  setIsLevelFinished: React.Dispatch<React.SetStateAction<boolean>>, 
  setLevelNumberToDisplay: React.Dispatch<React.SetStateAction<number>>,
  levelNumberToDisplay: number,
  currentLevelNumber: keyof typeof WORDS_BY_LVL_NUMBER
};

export default TWinningScreenProps;