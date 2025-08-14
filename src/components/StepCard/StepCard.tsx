import './StepCard.scss'

type StepProps ={
  step: number,
  name: string,
  isActive: boolean
}

function StepCard({step,name, isActive}: StepProps) {
  return (
    <div className="stepcard">
      <div className={`stepcard_number ${isActive? 'activeNumber' : ''} `}>
        <p>{step}</p>
      </div>
      <div className="stepcard_details">
        <p className="stepcard_details_number">STEP {step}</p>
        <p className="stepcard_details_name">{name}</p>
      </div>
    </div>
  );
}

export default StepCard;
