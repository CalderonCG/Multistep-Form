import { useState } from "react";
import type { StepTwoPropsType } from "../../utils/FormTypes";
import PlanCard from "../PlanCard/PlanCard";
import "./StepTwo.scss";

const plans = [
  {
    id: 1,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 2,
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 3,
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
] as const;

function StepTwo({ data, handleStep, handleFormUpdate }: StepTwoPropsType) {
  const [isYearly, setIsYearly] = useState(false);
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
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              isYearly={isYearly}
            />
          ))}
        </div>

        <div className="step_two_container_mode">
          <p>Monthly</p>
          <div className="toggle">
            <input type="checkbox" checked={isYearly} onChange={()=>setIsYearly(!isYearly)}  />
            <label></label>
          </div>
          <p>Yearly</p>
        </div>
      </div>
      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>
          Go back
        </button>
        <button className={`steps_next `} onClick={() => handleStep("Next")}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
