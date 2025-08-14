import PlanCard from "../PlanCard/PlanCard";
import "./StepTwo.scss";

function StepTwo() {
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
    </div>
  );
}

export default StepTwo;
