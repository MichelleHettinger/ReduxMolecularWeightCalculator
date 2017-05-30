import fetch from 'isomorphic-fetch';
import CryptoJS from 'crypto-js';
import { pendingTask, begin, end } from 'react-redux-spinner';
import { REQUEST_USER, RECEIVE_USER_FAIL, RECEIVE_USER_SUCCESS } from '../constants/actions';
import validateEmailPass from '../utils/validation';

const requestUser = (email, password) => {
  return {
    type: REQUEST_USER,
    email,
    password,
    [pendingTask]: begin,
  };
};

export const receiveUser = (email, userObj) => {
  if (userObj.email === undefined) {
    return {
      type: RECEIVE_USER_FAIL,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: RECEIVE_USER_SUCCESS,
    user: userObj,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const findUser = (email, password) => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  if (!validateEmailPass(email, password)) {
    return () => {
      console.log('Incomplete Form');
    };
  }

  const encryptedEmail = CryptoJS.DES.encrypt(email, 'michelle is awesome').toString();
  const encryptedPassword = CryptoJS.DES.encrypt(password, 'michelle is totally awesome').toString();

  //Passed input validation, now look up user based off email/pass.
  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestUser(email, password));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`/authenticate/${encryptedEmail}/${encryptedPassword}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(userObj =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveUser(email, userObj)),
      );

      // In a real world app, you also want to
      // catch any error in the network call.
  };
};
