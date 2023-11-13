const Button = (props) => {
    return (
        <button id={props.id} type={props.type} onClick={props.handleClick} value={props.value} >{props.text}</button>
    );
}

export default Button;