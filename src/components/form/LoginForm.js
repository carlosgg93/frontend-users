import Input from './Input';

const LoginForm = ({ onSubmit, onChangeUserName, onChangePassword, userName, pwd }) => (
  <form onSubmit={onSubmit}>
    <Input onChange={onChangeUserName} text="Input Name" value={userName} placeholder="Username" />
    <br />
    <Input onChange={onChangePassword} text="Input password" value={pwd} placeholder="Password" />
    <br />
    <button type="submit">Login</button>
  </form>
);

export default LoginForm;
