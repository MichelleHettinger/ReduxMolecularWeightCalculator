import { connect } from 'react-redux';
import ElementsPanel from '../components/ElementsPanel';
import { pinElement } from '../actions/index';
import { calculateTotal } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    elementsFound: state.elementsFound,
  };
};

//
const mapDispatchToProps = (dispatch) => {
  return {
    onElementClick: (element) => {
      //console.log(element)
      dispatch(pinElement(element));
      dispatch(calculateTotal(element.mass, 'PLUS'));
    }
  };
};

const ElementDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ElementsPanel);

export default ElementDivs;
