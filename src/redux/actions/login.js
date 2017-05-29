import fetch from 'isomorphic-fetch';
import { pendingTask, begin, end } from 'react-redux-spinner';
import { REQUEST_USER, RECEIVE_USER } from '../constants/actions';

const requestUser = (email) => {
  return {
    type: REQUEST_USER,
    email,
    [pendingTask]: begin,
  };
};

export const receiveUser = (email, json) => {
  console.log(email);
  console.log(json);
  return {
    type: RECEIVE_USER,
    email,
    users: json,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const findUser = (email) => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestUser(email));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('/api/saved/', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveUser(email, json)),
      );

      // In a real world app, you also want to
      // catch any error in the network call.
  };
};
