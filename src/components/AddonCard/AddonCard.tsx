import './AdoonCard.scss'

function AddonCard() {
  return <div className="addon">
    <input type="checkbox" className='addon_check' />
    <div className="addon_details">
        <p className='addon_name'>Online service</p>
        <p className='addon_description'>Access to multiplayer games</p>
    </div>
    <p className='addon_price'>+$1/mo</p>
  </div>;
}

export default AddonCard;
