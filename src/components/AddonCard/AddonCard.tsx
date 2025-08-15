import type { AddonType } from '../../utils/FormTypes';
import './AdoonCard.scss'

function AddonCard({id, name, description, monthlyPrice, yearlyPrice, type}: AddonType & {type: "Monthly" | "Yearly"}) {
  return <div className="addon">
    <input type="checkbox" className='addon_check' />
    <div className="addon_details">
        <p className='addon_name'>{name}</p>
        <p className='addon_description'>{description}</p>
    </div>
    <p className='addon_price'>{type === 'Yearly' ? `+$${yearlyPrice}/yr` : `+$${monthlyPrice}/mo`}</p>
  </div>;
}

export default AddonCard;
