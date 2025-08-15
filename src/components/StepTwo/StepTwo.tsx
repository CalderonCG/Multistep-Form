import { useState } from "react";
import type { StepTwoPropsType, StepTwoType } from "../../utils/FormTypes";
import PlanCard from "../PlanCard/PlanCard";
import "./StepTwo.scss";

type planType = {
  id: number;
  name: "Arcade" | "Advanced" | "Pro";
  monthlyPrice: number;
  yearlyPrice: number;
};

const plans: planType[] = [
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

function StepTwo({ data, planType, handleStep, handleFormUpdate, handleTypeUpdate }: StepTwoPropsType) {
  const [selectedType, setSelectedType] = useState<"Monthly" | "Yearly">(planType);
  const [selectedPlan, setSelectedPlan] = useState(data.plan);

  const handleSubmit = (type: "Next" | "Prev") => {
    const storedPlan: StepTwoType = {
      plan: selectedPlan
    };
    handleFormUpdate({ step: 2, data: storedPlan });
    handleTypeUpdate(selectedType);
    handleStep(type);
  };

  return (
    <div className="step_two_container">
      <div className="step_two_container_header">
        <h1>Select your plan</h1>
        <p className="step_two_container_description">
          You have the option or monthly or yearly billing
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
              type={selectedType}
              isSelected={plan.id === selectedPlan.id}
              handleSelected={setSelectedPlan}
            />
          ))}
        </div>

        <div className="step_two_container_mode">
          <p>Monthly</p>
          <div className="toggle">
            <input
              type="checkbox"
              checked={selectedType === "Yearly"}
              onChange={() =>
                setSelectedType(selectedType === "Yearly" ? "Monthly" : "Yearly")
              }
            />
            <label></label>
          </div>
          <p>Yearly</p>
        </div>
      </div>
      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleSubmit("Prev")}>
          Go back
        </button>
        <button className={`steps_next `} onClick={() => handleSubmit("Next")}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
