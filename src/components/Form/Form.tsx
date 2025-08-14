import { useReducer, useState } from "react";
import StepCard from "../StepCard/StepCard";
import StepFour from "../StepFour/StepFour";
import StepOne from "../StepOne/StepOne";
import StepThree from "../StepThree/StepThree";
import StepTwo from "../StepTwo/StepTwo";
import "./Form.scss";
import { useForm } from "../../utils/FormContext";

const updateStep = (state: number, type: "Next" | "Prev") => {
  switch (type) {
    case "Next":
      return state + 1;
    case "Prev":
      return state - 1;
    default:
      return state;
  }
};

function Form() {
  const [step, dispatchStep] = useReducer(updateStep, 1);
  const {form, updateForm} = useForm();
  console.log(form);

  return (
    <div className="container">
      <div className="container_list">
        <StepCard step={1} name="YOUR INFO" isActive={step===1} />
        <StepCard step={2} name="SELECT PLAN"  isActive={step===2}/>
        <StepCard step={3} name="ADD-ONS" isActive={step===3}/>
        <StepCard step={4} name="SUMMARY" isActive={step===4}/>
      </div>
      <div className="container_form">
        {step === 1 ? (
          <StepOne handleStep={dispatchStep}/>
        ) : step === 2 ? (
          <StepTwo handleStep={dispatchStep}/>
        ) : step === 3 ? (
          <StepThree handleStep={dispatchStep}/>
        ) : (
          <StepFour handleStep={dispatchStep}/>
        )}
      </div>
    </div>
  );
}

export default Form;
