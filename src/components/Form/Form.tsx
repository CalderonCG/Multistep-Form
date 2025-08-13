import StepCard from '../StepCard/StepCard'
import StepOne from '../StepOne/StepOne'
import StepThree from '../StepThree/StepThree'
import StepTwo from '../StepTwo/StepTwo'
import './Form.scss'

function Form() {
  return (
    <div className="container">
        <div className='container_list'>
            <StepCard/>
            <StepCard/>
            <StepCard/>
            <StepCard/>
        </div>
        <div className='container_form'>
            <StepThree/>
        </div>
    </div>
  )
}

export default Form