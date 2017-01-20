import { connect } from 'react-redux'
import ElementsPanel from '../components/ElementsPanel'

const mapStateToProps = (state) => {

  return {
    elementsFound: state.elementsFound
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const ElementDivs = connect(
  mapStateToProps,
  //mapDispatchToProps
)(ElementsPanel)

export default ElementDivs