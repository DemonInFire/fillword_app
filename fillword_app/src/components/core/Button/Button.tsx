import Styled from './Button.style';
import TButtonProps from './Button.type';

const Button = ({ onClick, title}: TButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>{title}</Styled.Button>
  )
};

export default Button;