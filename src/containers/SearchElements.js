import { connect } from 'react-redux';
import { searchForElements } from '../actions';
import SearchElements from '../components/SearchElements';

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyboardInput: (value) => {
      dispatch(searchForElements(value));
    },
  };
};

const SearchForElementsDiv = connect(
  mapDispatchToProps,
)(SearchElements);

export default SearchForElementsDiv;
