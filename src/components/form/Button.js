import { Button as BSButton } from 'reactstrap';

const Button = ({ id, handleClick, value, text }) => (
  <BSButton id={id} type="button" onClick={handleClick} value={value} color="primary" size="sm" outline>{text}</BSButton>
);

export default Button;
