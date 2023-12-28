const Button = ({ id, handleClick, value, text }) => (
  <button id={id} type="button" onClick={handleClick} value={value}>{text}</button>
);

export default Button;
