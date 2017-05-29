import {
  REQUEST_USER,
  RECEIVE_USER,
} from '../constants/actions';

const user = (state = {
  isFetching: false,
  items: {},
}, action) => {
  switch (action.type) {
    case REQUEST_USER: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.user,
        lastUpdated: action.receivedAt,
      });

    default: {
      return state;
    }
  }
};

export default user;
