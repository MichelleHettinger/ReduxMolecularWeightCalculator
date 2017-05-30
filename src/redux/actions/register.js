import fetch from 'isomorphic-fetch';
import CryptoJS from 'crypto-js';
import { pendingTask, begin, end } from 'react-redux-spinner';
import validateEmailPass from '../utils/validation';
import {
  REQUEST_REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../constants/actions';

const requestRegisterUser = (email, password) => {
  return {
    type: REQUEST_REGISTER_USER,
    email,
    password,
    [pendingTask]: begin,
  };
};

export const finishRegisterUser = (email, userObj) => {
  if (userObj.email === undefined) {
    return {
      type: REGISTER_USER_FAIL,
      receivedAt: Date.now(),
      [pendingTask]: end,
    };
  }

  return {
    type: REGISTER_USER_SUCCESS,
    user: userObj,
    receivedAt: Date.now(),
    [pendingTask]: end,
  };
};

export const registerUser = (email, password) => {
  if (!validateEmailPass(email, password)) {
    return () => {
      console.log('Incomplete Form');
    };
  }

  const encryptedEmail = CryptoJS.AES.encrypt(email, 'michelle is awesome').toString();
  const encryptedPassword = CryptoJS.AES.encrypt(password, 'michelle is totally awesome').toString();
  const encodedEmail = encodeURIComponent(encryptedEmail);
  const encodedPassword = encodeURIComponent(encryptedPassword);

  return (dispatch) => {
    dispatch(requestRegisterUser(email, password));

    return fetch(`/register/${encodedEmail}/${encodedPassword}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(userObj =>
        dispatch(finishRegisterUser(email, userObj)),
      );
  };
};
