import Input from "./Input";
import Button from "./Button";

const UserForm = ({onSubmit, onChangeUserName, onChangePassword, userName, pwd}) => {
    return (
        <form onSubmit={onSubmit}>
            <Input onChange={onChangeUserName} text={'Input Name'} value={userName} /><br/>
            <Input onChange={onChangePassword} text={'Input password'} value={pwd} /><br/>
            <Button type="submit" text="Login" />
        </form>
    );
}

export default UserForm;
