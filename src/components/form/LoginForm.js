import Input from './Input';
import Button from './Button';

const LoginForm = ({ onSubmit, onChangeUserName, onChangePassword, userName, pwd }) => (
  <form onSubmit={onSubmit}>
    <Input onChange={onChangeUserName} text="Input Name" value={userName} placeholder="Username" />
    <br />
    <Input onChange={onChangePassword} text="Input password" value={pwd} placeholder="Password" />
    <br />
    <Button type="submit" text="Login" />
  </form>
);

export default LoginForm;
