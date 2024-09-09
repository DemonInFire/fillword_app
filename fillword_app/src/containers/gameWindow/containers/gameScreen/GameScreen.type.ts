import { WORDS_BY_LVL_NUMBER } from "../gameScreen/const";

type TGameScreenProps = {
  setIsLevelFinished: React.Dispatch<React.SetStateAction<boolean>>, 
  currentLevelNumber: keyof typeof WORDS_BY_LVL_NUMBER,
  levelNumberToDisplay: number
};

export default TGameScreenProps;