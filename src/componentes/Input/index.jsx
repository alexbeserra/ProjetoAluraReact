import './estilo.css'

function Input(props) {
    return (
        <input 
            className='custom-input'
            placeholder={props.placeholder}
            {...props}
        />

    )
}

export default Input