import { connect } from 'react-redux';
import { searchForElements } from '../actions/index';
import { fetchPosts } from '../actions/async';
import SearchElements from '../components/SearchElements';

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
