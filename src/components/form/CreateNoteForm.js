import Input from "./Input";
import Button from "./Button";

const CreateNoteForm = ({onSubmit, onChangeTitle, onChangeContent, noteTitle, noteContent, handleShowLoginButton}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <Input onChange={onChangeTitle} text={'Input Title'}  placeholder={"Title"} value={noteTitle} /><br/>
                <Input onChange={onChangeContent} text={'Input Content'} placeholder={"Content"} value={noteContent} /><br/>
                <Button type="submit" text="Create" />
            </form>
            
            <Button type="submit" handleClick={handleShowLoginButton} text="Show login button" />
        </>
    );
}

export default CreateNoteForm;
