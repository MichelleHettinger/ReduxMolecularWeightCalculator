import { connect } from 'react-redux'
import CalculationPanel from '../components/CalculationPanel'
import { doPlus } from '../actions/index'
import { doMinus } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    elementsClicked: state.elementsClicked
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onPlusClick: (id) => {
      dispatch(doPlus(id))
    },
    onMinusClick: (id, multiplier) => {
      dispatch(doMinus(id, multiplier))
    }
  }
}

const CalcElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculationPanel)

export default CalcElementDivs