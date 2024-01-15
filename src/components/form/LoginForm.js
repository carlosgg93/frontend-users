import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginForm = ({ onSubmit, onChangeUserName, onChangePassword, userName, pwd }) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="title">Input Title</Label>
      <Input type="text" onChange={onChangeUserName} value={userName} placeholder="Username" />
    </FormGroup>
    <FormGroup>
      <Label for="title">Input Title</Label>
      <Input type="password" onChange={onChangePassword} value={pwd} placeholder="Password" />
    </FormGroup>
    <Button>Login</Button>
  </Form>
);

export default LoginForm;
