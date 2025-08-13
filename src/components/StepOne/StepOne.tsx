import Input from "../Input/Input";
import "./StepOne.scss";

function StepOne() {
  return (
    <div className="step_one_container">
      <div className="step_one_container_header">
        <h1>Personal info</h1>
        <p className="step_one_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>
      <div className="step_one_container_inputs">

      <Input name="Name" placeholder="e.g Christopher Calderon"/>
      <Input name="Email Address" placeholder="e.g Chris@email.com"/>
      <Input name="Phone Number" placeholder="e.g +503 1235 1235"/>
      </div>

      <button>Next Step</button>
    </div>
  );
}

export default StepOne;
