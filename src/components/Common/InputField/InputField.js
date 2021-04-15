import './InputField.css'

const InputField = ({ name, value, placeholder, type = 'text', onChangeHandler }) => {

    return (
        <input
            className="input-field"
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={value}
            onChange={onChangeHandler}
        />
    )
}

export default InputField