import StepCard from '../StepCard/StepCard'
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
        <div></div>
    </div>
  )
}

export default Form