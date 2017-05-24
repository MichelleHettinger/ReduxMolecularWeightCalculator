import { connect } from 'react-redux';
import { searchForElements } from '../actions/index';
import SearchElements from '../components/SearchElements';
import { fetchPosts } from '../actions/async';

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyboardInput: (value) => {
      dispatch(searchForElements(value));
    },
    testAsync: () => {
      dispatch(fetchPosts());
    },
  };
};

const SearchElementsDiv = connect(
  null,
  mapDispatchToProps,
)(SearchElements);

export default SearchElementsDiv;
