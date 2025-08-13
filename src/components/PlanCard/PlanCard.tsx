import "./PlanCard.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";

function PlanCard() {
  return (
    <div className="plancard">
      <img className="plancard_icon" src={arcadeIcon} alt="icon" />

      <div className="plancard_details">
        <p className="plancard_name">Arcade</p>
        <p className="plancard_price">$9/mo</p>
        <p className="plancard_perk">2 months free</p>
      </div>
    </div>
  );
}

export default PlanCard;
