import './StepCard.scss'
function StepCard() {
  return (
    <div className="stepcard">
      <div className="stepcard_number">
        <p>1</p>
      </div>
      <div className="stepcard_details">
        <p className="stepcard_details_number">STEP 1</p>
        <p className="stepcard_details_name">SELECT PLAN</p>
      </div>
    </div>
  );
}

export default StepCard;
