import React from 'react';
import PropTypes from 'prop-types';

let email;
let password;

const LoginHeader = ({ logUserIn, isLogged, signUserUp }) => {
  const loginHeader = (
    <div className='col-sm-4' id='loginHeader'>
      <div className='form-group' id='emailFormGroup'>
        <div className='col-sm-9' id='emailTextInputDiv'>
          <input
            id='emailInput'
            type='text'
            className='form-control input-md'
            placeholder='Email Address'
            ref={ (node) => {
              //Node refers to this specific element (this input element)
              email = node;
            } }
          />
        </div>
        <div className='col-sm-3' id='emailButtonInputDiv'>
          <input
            id='loginButton'
            type='button'
            value='Log In'
            className='btn btn-success btn-sm'
            onClick={ () => logUserIn(email.value, password.value) }
          />
        </div>
      </div>
      <div className='form-group' id='passwordFormGroup'>
        <div className='col-sm-9' id='passwordTextInputDiv'>
          <input
            id='passwordInput'
            type='password'
            className='form-control input-md'
            placeholder='Password'
            ref={ (node) => {
              //Node refers to this specific element (this input element)
              password = node;
            } }
          />
        </div>
        <div className='col-sm-3' id='passwordButtonInputDiv'>
          <input
            id='registerButton'
            type='button'
            value='Register'
            className='btn btn-primary btn-sm'
            onClick={ () => signUserUp(email.value, password.value) }
          />
        </div>
      </div>
    </div>
  );

  const userHeader = (
    <div className='col-sm-4' id='userAccountButtons'>
      <div className='pull-right' id='userAccountButtonsDiv'>
        <button
          id='myAccountButton'
          type='button'
          data-toggle='modal'
          data-target='#accountModal'
          className='btn btn-primary btn-sm'
        >MyAccount</button>
        <input
          id='logOutButton'
          type='button'
          value='Log Out'
          className='btn btn-warning btn-sm'
          //onClick={this.logOut}
        />
      </div>
      <div className='modal fade' id='accountModal'>
        <div className='modal-dialog' role='document' id='accountModalDialog'>
          <div className='modal-content' id='accountModalContent'>
            <div className='modal-header' id='accountModalHeader'>
              <button
                id='accountModalCloseButton'
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
              <h3 className='modal-title'>Your Account!</h3>
            </div>
            <div className='modal-body' id='accountModalBody'>
              <div className='row' id='accountModalRow'>
                <div className='col-sm-offset-2' id='accountModalForm'>
                  <div className='form-inline' id='accountFormInlineName'>
                    <div className='form-group' id='accountFormGroupName'>
                      <label htmlFor='name'>Name:</label>
                      <p>USERNAMEVARIABLE</p>
                    </div>
                  </div>
                  <div className='form-inline' id='accountFormInlineEmail'>
                    <div className='form-group' id='accountFormGroupEmail'>
                      <label htmlFor='email'>Email:</label>
                      <p>USEREMAILVARIABLE</p>
                    </div>
                  </div>
                  <div className='form-inline' id='accountFormInlineNewName'>
                    <div className='form-group' id='accountFormGroupNewName'>
                      <label htmlFor='newname'>New Name:</label>
                      <input
                        id='accountFormNewNameInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.displayName}
                        //onChange={text => this.grabNewName(text.target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-inline' id='accountFormInlineNewEmail'>
                    <div className='form-group' id='accountFormGroupNewEmail'>
                      <label htmlFor='newemail'>New Email:</label>
                      <input
                        id='accountFormNewEmailInput'
                        type='text'
                        className='form-control input-md'
                        //placeholder={this.state.user.email}
                        //onChange={text => this.grabNewEmail(text.target.value)}
                      />
                    </div>
                    <input
                      id='accountFormUpdateButton'
                      type='button'
                      value='Submit'
                      className='btn btn-primary btn-sm'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer' id='accountModalFooter'>
              <p>Need to reset your password?</p>
              <button
                id='resetPasswordButton'
                type='button'
                className='btn btn-secondary btn-xs center-block'
                //onClick={ this.resetPassword }
              >Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLogged === false) {
    return loginHeader;
  }
  return userHeader;
};

LoginHeader.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logUserIn: PropTypes.func.isRequired,
  signUserUp: PropTypes.func.isRequired,
};

export default LoginHeader;
