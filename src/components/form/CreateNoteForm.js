import Input from "./Input";
import Button from "./Button";

const CreateNoteForm = ({onSubmit, onChangeTitle, onChangeContent}) => {
    return (
        <form onSubmit={onSubmit}>
            <Input onChange={onChangeTitle} text={'Input Title'}  placeholder={"Title"}/><br/>
            <Input onChange={onChangeContent} text={'Input Content'} placeholder={"Content"} /><br/>
            <Button type="submit" text="Create" />
        </form>
    );
}

export default CreateNoteForm;
