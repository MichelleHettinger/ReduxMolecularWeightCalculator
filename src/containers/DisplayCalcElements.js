import { connect } from 'react-redux';
import CalculationPanel from '../components/CalculationPanel';
import { doPlus } from '../actions/index';
import { doMinus } from '../actions/index';
import { calculateTotal } from '../actions/index';
import { doParenthesis } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    elementsClicked: state.elementsClicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlusClick: (id, mass) => {
      dispatch(doPlus(id))
      dispatch(calculateTotal(mass, 'PLUS'))
    },
    onMinusClick: (id, multiplier, mass) => {
      dispatch(doMinus(id, multiplier))
      dispatch(calculateTotal(mass, 'MINUS'))
    },
    onElementClick: (id) => {
      dispatch(doParenthesis(id))
    }
  }
}

const CalcElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculationPanel)

export default CalcElementDivs