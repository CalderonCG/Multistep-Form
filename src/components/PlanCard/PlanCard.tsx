import "./PlanCard.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg"
import proIcon from "../../assets/images/icon-pro.svg"

type planType = {
  id: number,
  name: 'Arcade' | 'Advanced' | 'Pro',
  monthlyPrice: number,
  yearlyPrice: number,
  isYearly: boolean
}

function PlanCard({name, monthlyPrice, yearlyPrice, isYearly}: planType) {
  return (
    <div className="plancard">
      <img className="plancard_icon" src={name === "Arcade"? arcadeIcon : name === "Advanced" ? advancedIcon : proIcon} alt="icon" />

      <div className="plancard_details">
        <p className="plancard_name">{name}</p>
        <p className="plancard_price">{isYearly? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo` }</p>
        {isYearly &&
        <p className="plancard_perk">2 months free</p> }
      </div>
    </div>
  );
}

export default PlanCard;
