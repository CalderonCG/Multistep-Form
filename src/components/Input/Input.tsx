
import './Input.scss'

type props={
    name: string,
    placeholder: string
}

function Input({name, placeholder}: props) {
  return (
    <div className="input">
        <div className="input_labels">
            <p>{name}</p>
            <p className='no_error_label '>This field is required</p>
        </div>
        <input className='input_box' type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input