import React from 'react';
import PropTypes from 'prop-types';

// let email;

const LoginHeader = ({ logUserIn }) => (
  <div className='col-sm-4' id='loginHeader'>
    <div className='form-group'>
      <div className='col-sm-9'>
        <input
          id='email'
          type='text'
          className='form-control input-md'
          placeholder='Email Address'
          // ref={ (node) => {
          //   //Node refers to this specific element (this input element)
          //   email = node;
          // } }
        />
      </div>
      <div className='col-sm-3'>
        <input
          id='loginButton'
          type='button'
          value='Log In'
          className='btn btn-success btn-sm'
          onClick={ () => logUserIn('aa') }
        />
      </div>
    </div>
    <div className='form-group'>
      <div className='col-sm-9'>
        <input
          id='loginPasswordInput'
          type='password'
          className='form-control input-md'
          placeholder='Password'
        />
      </div>
      <div className='col-sm-3'>
        <input
          type='button'
          value='Register'
          className='btn btn-primary btn-sm'
        />
      </div>
    </div>
  </div>
);

LoginHeader.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  // signUserUp: PropTypes.func.isRequired,
};

export default LoginHeader;
