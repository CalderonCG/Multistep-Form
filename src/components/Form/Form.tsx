import StepCard from '../StepCard/StepCard'
import StepFour from '../StepFour/StepFour'
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
            <StepFour/>
        <div className="steps">
        <button className="steps_prev">Go back</button>
        <button className="steps_next">Next Step</button>
      </div>
        </div>
    </div>
  )
}

export default Form