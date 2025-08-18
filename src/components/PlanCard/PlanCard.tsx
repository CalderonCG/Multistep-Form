import "./PlanCard.scss";
import arcadeIcon from "/images/icon-arcade.svg";
import advancedIcon from "/images/icon-advanced.svg"
import proIcon from "/images/icon-pro.svg"

type planType = {
  id: number,
  name: 'Arcade' | 'Advanced' | 'Pro',
  monthlyPrice: number,
  yearlyPrice: number,
  type: 'Monthly'|'Yearly',
  isSelected: boolean,
  handleSelected: React.Dispatch<React.SetStateAction<{
    id: number;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
}>>
}

function PlanCard({id, name, monthlyPrice, yearlyPrice, type, isSelected, handleSelected}: planType) {
  
  const planObject={
    id, name, monthlyPrice, yearlyPrice
  }
  
  return (
    <div onClick={()=>handleSelected(planObject)}
    className={`plancard ${isSelected? 'selectedPlan':''} `}>
      <img className="plancard_icon" src={name === "Arcade"? arcadeIcon : name === "Advanced" ? advancedIcon : proIcon} alt="icon" />

      <div className="plancard_details">
        <p className="plancard_name">{name}</p>
        <p className="plancard_price">{type === 'Yearly'? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo` }</p>
        {type === 'Yearly' &&
        <p className="plancard_perk">2 months free</p> }
      </div>
    </div>
  );
}

export default PlanCard;
