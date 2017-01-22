import { connect } from 'react-redux'
import ElementsPanel from '../components/ElementsPanel'
import { pinElement } from '../actions/index'

const mapStateToProps = (state) => {

  return {
    elementsFound: state.elementsFound
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onElementClick: (element) => {
    	//console.log(element)
      dispatch(pinElement(element))
    }
  }
}

const ElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementsPanel)

export default ElementDivs