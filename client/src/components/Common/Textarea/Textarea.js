import './Textarea.css'

const Textarea = ({ name, value, placeholder, type = 'text', onChangeHandler }) => {

    return (
        <textarea
            className="textarea"
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={value}
            onChange={onChangeHandler}
        ></textarea>
    )
}

export default Textarea