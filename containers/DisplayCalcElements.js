import { connect } from 'react-redux'
import CalculationPanel from '../components/CalculationPanel'
//import { pinElement } from '../actions/index'

const mapStateToProps = (state) => {

  return {
    elementsClicked: state.elementsClicked
  }
}
 
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onElementClick: (element) => {
//     	//console.log(element)
//       dispatch(pinElement(element))
//     }
//   }
// }

const CalcElementDivs = connect(
  mapStateToProps,
  //mapDispatchToProps
)(CalculationPanel)

export default CalcElementDivs