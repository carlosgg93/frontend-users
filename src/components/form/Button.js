const Button = ({ id, type, handleClick, value, text }) => (
  <button id={id} type={type} onClick={handleClick} value={value}>{text}</button>
);

export default Button;
