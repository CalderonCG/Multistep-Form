import { useReducer, useState } from "react";
import { type StepOnePropsType, type StepOneType} from "../../utils/FormTypes";
import Input from "../Input/Input";
import "./StepOne.scss";
import { validateForm } from "../../utils/FormValidation";


//Tipo de la accion que recibe el dispatcher
type ActionType = {
  type: "name" | "email" | "phoneNumber";
  value: string;
};

//Funcion que ejecuta el dispatcher
//Modifica el state segun el valor que reciba
const handleChange = (state: StepOneType, action: ActionType): StepOneType => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "phoneNumber":
      return { ...state, phoneNumber: action.value };
    default:
      return state;
  }
};

function StepOne({ data, handleStep, handleFormUpdate }: StepOnePropsType) {
  const [state, dispatch] = useReducer(handleChange, {
    name: data.name,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });
  const [errors, setErrors] = useState<Record<string,string>>({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleSubmit = (type: 'Next'|'Prev') =>{
    const errorList =validateForm(state)
    const hasError = Object.values(errorList).some(value => value !== '')
    
    console.log(errorList)
    if(hasError){
      setErrors(errorList)
      return
    }
    handleFormUpdate({step: 1, data: state});
    handleStep(type)
  }

  return (
    <div className="step_one_container">
      <div className="step_one_container_header">
        <h1>Personal info</h1>
        <p className="step_one_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>
      <div className="step_one_container_inputs">
        <Input name="Name" placeholder="e.g Christopher Calderon" value={state.name} 
        action="name" handleChange={dispatch} error={errors.name}/>
        <Input name="Email Address" placeholder="e.g Chris@email.com" value={state.email}
         action="email" handleChange={dispatch} error={errors.email}/>
        <Input name="Phone Number" placeholder="e.g +503 1235-1235" value={state.phoneNumber}
         action="phoneNumber" handleChange={dispatch} error={errors.phoneNumber}/>
      </div>
      <div className="steps">
        <button className={`steps_next `} onClick={() => handleSubmit("Next")}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepOne;
