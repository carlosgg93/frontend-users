const Input = ({text, onChange, value, placeholder}) => {
    return (
        <div className="input-form">
            <span>{text}</span><br/>
            <input type="text" onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
    );
}

export default Input;