import { TWordPreviewStatusesValues } from "../../../consts/changeWordPreviewStatuses";
import ITouchPosition from "../../../type/ITouchPosition";

type TCircleWithLetterProps = {
  letter: string, 
  left: number, 
  top: number, 
  isMouseHold: boolean, 
  id: string,
  lastSelectedLetterIdList: Array<string>,
  touchPosition: ITouchPosition,
  setLastSelectedLetterIdList: React.Dispatch<React.SetStateAction<string[]>>,
  changeWordPreview: (status: TWordPreviewStatusesValues, letter?: string) => void,
};

export default TCircleWithLetterProps;