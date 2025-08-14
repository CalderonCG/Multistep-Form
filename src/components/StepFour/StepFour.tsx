import type { StepPropsType } from "../../utils/FormTypes";
import "./StepFour.scss";

function StepFour({handleStep} : StepPropsType) {
  return (
    <div className="step_four_container">
      <div className="step_four_container_header">
        <h1>Personal info</h1>
        <p className="step_four_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>

      <div className="step_four_container_summary">
      <div className="summary">
        <div className="summary_details">
          <div className="summary_details_plan">
            <p>Arcade (Yearly)</p>
            <a>Change</a>
          </div>
          <p className="summary_details_price">$90/yr</p>
        </div>
        <hr className="divider" />
        <div className="summary_list">
          <div className="summary_list_addon">
            <p className="summary_list_name">Online service</p>
            <p className="summary_list_price">+$10/yr</p>
          </div>

          <div className="summary_list_addon">
            <p className="summary_list_name">Online service</p>
            <p className="summary_list_price">+$10/yr</p>
          </div>
        </div>
      </div>

      <div className="total">
        <p className="total_label">Total(per year)</p>
        <p className="total_price">$120/yr</p>
      </div>
      </div>


      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>Go back</button>
      </div>
    </div>
  );
}

export default StepFour;
