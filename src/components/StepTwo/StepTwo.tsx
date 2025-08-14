import type { StepPropsType } from "../../utils/FormTypes";
import PlanCard from "../PlanCard/PlanCard";
import "./StepTwo.scss";

function StepTwo({handleStep} : StepPropsType) {
  return (
    <div className="step_two_container">
      <div className="step_two_container_header">
        <h1>Personal info</h1>
        <p className="step_two_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>

      <div className="step_two_container_plans">
        <div className="step_two_container_list">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>

        <div className="step_two_container_mode">
          <p>Monthly</p>
          <div className="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <p>Yearly</p>
        </div>
      </div>
      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>Go back</button>
        <button className={`steps_next `} onClick={() => handleStep("Next")}>Next Step</button>
      </div>
    </div>
  )
}

export default StepTwo;
