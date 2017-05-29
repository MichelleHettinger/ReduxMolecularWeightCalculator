import {
  REQUEST_USER,
  RECEIVE_USER_FAIL,
  RECEIVE_USER_SUCCESS,
} from '../constants/actions';

const user = (state = {
  isFetching: false,
  isLogged: false,
  details: {},
}, action) => {
  switch (action.type) {
    case REQUEST_USER: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case RECEIVE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLogged: true,
        details: action.user,
        lastUpdated: action.receivedAt,
      });

    case RECEIVE_USER_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        isLogged: false,
        details: {},
        lastUpdated: action.receivedAt,
      });

    default: {
      return state;
    }
  }
};

export default user;
