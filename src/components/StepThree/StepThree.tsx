import type { AddonType, StepThreePropsType } from "../../utils/FormTypes";
import AddonCard from "../AddonCard/AddonCard";
import "./StepThree.scss";

const addons: AddonType[] = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

function StepThree({
  data,
  planType,
  handleStep,
  handleFormUpdate,
}: StepThreePropsType) {
  return (
    <div className="step_three_container">
      <div className="step_three_container_header">
        <h1>Personal info</h1>
        <p className="step_three_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>

      <div className="step_three_container_addons">
        {addons.map((addon) => <AddonCard key={addon.id} name={addon.name} description={addon.description}
        monthlyPrice={addon.monthlyPrice} yearlyPrice={addon.yearlyPrice} type={planType}
        /> )}
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

export default StepThree;
