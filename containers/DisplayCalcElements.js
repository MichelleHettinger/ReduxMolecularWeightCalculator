import { connect } from 'react-redux'
import CalculationPanel from '../components/CalculationPanel'
import { addPlusMinus } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    elementsClicked: state.elementsClicked
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onPMClick: (element, i, pm) => {
    	//console.log(element)
      dispatch(addPlusMinus(element, i, pm))
    }
  }
}

const CalcElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculationPanel)

export default CalcElementDivs