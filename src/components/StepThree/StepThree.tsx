import type { StepPropsType } from '../../utils/FormTypes';
import AddonCard from '../AddonCard/AddonCard';
import './StepThree.scss'


function StepThree({handleStep} : StepPropsType) {
  return (
    <div className="step_three_container">
      <div className="step_three_container_header">
        <h1>Personal info</h1>
        <p className="step_three_container_description">
          Please provide your name, email address and phone number{" "}
        </p>
      </div>

      <div className='step_three_container_addons'>
        <AddonCard/>
        <AddonCard/>
        <AddonCard/>
      </div>

      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>Go back</button>
        <button className={`steps_next `} onClick={() => handleStep("Next")}>Next Step</button>
      </div>
    </div>
  );
}

export default StepThree;
