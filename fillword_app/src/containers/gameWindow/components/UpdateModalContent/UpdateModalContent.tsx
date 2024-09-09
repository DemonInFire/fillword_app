import { PopupRibbon } from '../PopupRibbon';
import { Button } from '../../../../components/core';

import Styled from './UpdateModalContent.style';

const UpdateModalContent = () => {
  const onClick = () => {
    window.location.reload();
  };

  return (
    <>
      <PopupRibbon />
      <Styled.Title>Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите страницу.</Styled.Title>
      <Styled.ButtonWrapper>
        <Button title={'Обновить'} onClick={onClick}/>
      </Styled.ButtonWrapper>
    </>
  )
};
  
export default UpdateModalContent;