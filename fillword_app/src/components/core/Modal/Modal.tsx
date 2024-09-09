import Styled from "./Modal.style";
import TModalProps from "./Modal.type";

const Modal = ({ isModalOpen, children }: TModalProps) => {
  return (
    <Styled.Wrapper $isActive={isModalOpen}>
      <Styled.Modal>
        {children}
      </Styled.Modal>
    </Styled.Wrapper>
  );
};

export default Modal;