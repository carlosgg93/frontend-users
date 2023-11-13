const Input = (props) => {
    return (
        <div className="input-form">
            <span>{props.text}</span><br/>
            <input type="text" onChange={props.onChange} value={props.value} />
        </div>
    );
}

export default Input;