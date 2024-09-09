import ITouchPosition from "../../../../../../type/ITouchPosition";

type TCircleWithLettersProps = {
  lettersList: Array<string>, 
  wordPreview: string, 
  setWordPreview: React.Dispatch<React.SetStateAction<string>>,
  isMouseHold: boolean,
  touchPosition: ITouchPosition,
};

export default TCircleWithLettersProps;