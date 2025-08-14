
import './Input.scss'


type ActionType = {
  type: "name" | "email" | "phoneNumber";
  value: string;
};
type props={
    name: string,
    placeholder: string,
    action: "name" | "email" | "phoneNumber";
    value: string,
    handleChange: React.ActionDispatch<[ActionType]>
};

function Input({name, placeholder, action, value, handleChange}: props) {
  return (
    <div className="input">
        <div className="input_labels">
            <p>{name}</p>
            <p className='no_error_label '>This field is required</p>
        </div>
        <input className='input_box' type="text" placeholder={placeholder} value={value} onChange={(e)=>handleChange({type: action, value: e.target.value})}  />
    </div>
  )
}

export default Input