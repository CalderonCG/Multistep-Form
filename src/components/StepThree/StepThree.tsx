import { useState } from "react";
import type { AddonType, StepThreePropsType } from "../../utils/FormTypes";
import AddonCard from "../AddonCard/AddonCard";
import "./StepThree.scss";


function StepThree({
  data,
  planType,
  handleStep,
  handleFormUpdate,
}: StepThreePropsType) {

  const [addonList, setAddonList] = useState<AddonType[]>(data.addons);

  const handleChange = (id: number) =>{
    setAddonList((prev) => prev.map(addon => 
      addon.id == id ? {...addon, isAdded: !addon.isAdded} : addon 
    ))
  }


    const handleSubmit = (type: "Next" | "Prev") => {

      handleFormUpdate({ step: 3, data:{addons: addonList} });
      handleStep(type);
    };
  return (


    <div className="step_three_container">
      <div className="step_three_container_header">
        <h1>Pick add-ons</h1>
        <p className="step_three_container_description">
          Add-ons help enchance your gaming experience
        </p>
      </div>

      <div className="step_three_container_addons">
        {addonList.map((addon) => <AddonCard key={addon.id} id={addon.id} name={addon.name} description={addon.description}
        monthlyPrice={addon.monthlyPrice} yearlyPrice={addon.yearlyPrice} type={planType} isAdded={addon.isAdded}
        handleChange={handleChange}
        /> )}
      </div>

      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>
          Go back
        </button>
        <button className={`steps_next `} onClick={() => handleSubmit("Next")}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepThree;
