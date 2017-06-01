import {
  REQUEST_USER,
  RECEIVE_USER_FAIL,
  RECEIVE_USER_SUCCESS,
  REQUEST_REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../constants/actions';

const user = (state = {
  isFetching: false,
  isLogged: false,
  details: {compounds: []},
}, action) => {
  switch (action.type) {
    case REQUEST_REGISTER_USER:
    case REQUEST_USER: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case REGISTER_USER_SUCCESS:
    case RECEIVE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLogged: true,
        details: action.user,
        lastUpdated: action.receivedAt,
      });
    case REGISTER_USER_FAIL:
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
