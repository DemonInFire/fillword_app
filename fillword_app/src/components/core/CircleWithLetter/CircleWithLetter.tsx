import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { ADD_WORD_IN_PREVIEW, CLEAR_WORD_PREVIEW, REMOVE_WORD_FROM_PREVIEW } from '../../../consts/changeWordPreviewStatuses';

import Styled from './CircleWithLetter.style';
import TCircleWithLetterProps from './CircleWithLetter.type';

const CircleWithLetter = ({
  letter, 
  left, 
  top, 
  isMouseHold, 
  touchPosition,
  id,
  lastSelectedLetterIdList,
  setLastSelectedLetterIdList,
  changeWordPreview
}: TCircleWithLetterProps) => {  
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [circlePositionInfo, setCirclePositionInfo] = useState<HTMLDivElement | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setCirclePositionInfo(wrapperRef.current);
    }
  }, [wrapperRef]);

  const checkMouseEnter = useCallback(() => {            
    setIsHovered(true);    
    
    if (!isMouseHold) return

    setIsChecked(true);
    
    const previousSelectedLetterId = lastSelectedLetterIdList[lastSelectedLetterIdList.length - 2];

    if (previousSelectedLetterId === id) {
      changeWordPreview(REMOVE_WORD_FROM_PREVIEW);

      const newLastSelectedLetterIdList = [...lastSelectedLetterIdList];
      newLastSelectedLetterIdList.pop();
      
      setLastSelectedLetterIdList(newLastSelectedLetterIdList);
    } else if (!lastSelectedLetterIdList.find(letterId => letterId === id)) {
      changeWordPreview(ADD_WORD_IN_PREVIEW, letter);

      const newLastSelectedLetterIdList = [...lastSelectedLetterIdList];
      newLastSelectedLetterIdList.push(id);        

      setLastSelectedLetterIdList(newLastSelectedLetterIdList);
    }
  }, [changeWordPreview, id, isMouseHold, lastSelectedLetterIdList, letter]);

  useEffect(() => {
    if (!circlePositionInfo || !touchPosition || !isMouseHold) return    

    const rectInfo = circlePositionInfo.getClientRects();

    const startX = rectInfo[0].left;
    const endX = rectInfo[0].right;
    const startY = rectInfo[0].top;
    const endY = rectInfo[0].bottom;        
    
    if (touchPosition.x < endX && touchPosition.x > startX && touchPosition.y < endY && touchPosition.y > startY) {
      checkMouseEnter();
    } else {
      checkMouseLeave();
    }
  }, [touchPosition, checkMouseEnter, left, top, circlePositionInfo, isMouseHold]);

  useEffect(() => {      
    if (!isMouseHold && lastSelectedLetterIdList.length > 0) {
      setIsChecked(false);
      setLastSelectedLetterIdList([]);
      changeWordPreview(CLEAR_WORD_PREVIEW);
    } else if (isMouseHold && isHovered && !lastSelectedLetterIdList.find(letterId => letterId === id) && !isMobile) {      
      setIsChecked(true);

      changeWordPreview(ADD_WORD_IN_PREVIEW, letter);

      const newLastSelectedLetterIdList = [...lastSelectedLetterIdList];
      newLastSelectedLetterIdList.push(id);        

      setLastSelectedLetterIdList(newLastSelectedLetterIdList);
    } else if (!lastSelectedLetterIdList.find(letterId => letterId === id)) {
      setIsChecked(false);
    }
  }, [isMouseHold, lastSelectedLetterIdList, setLastSelectedLetterIdList, id, changeWordPreview]);

  const checkMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <Styled.Wrapper 
      onMouseEnter={checkMouseEnter} 
      onMouseLeave={checkMouseLeave}
      onTouchEnd={checkMouseLeave}
      ref={wrapperRef}
      $left={left} 
      $top={top} 
      $isChecked={isChecked}
    >
      {letter}
    </Styled.Wrapper>
  )
};
  
export default memo(CircleWithLetter);