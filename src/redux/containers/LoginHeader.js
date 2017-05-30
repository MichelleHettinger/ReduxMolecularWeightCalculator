import { connect } from 'react-redux';
import { findUser } from '../actions/login';
import { registerUser } from '../actions/register';
import LoginHeader from '../components/LoginHeader';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: (email, password) => {
      dispatch(findUser(email, password));
    },
    signUserUp: (email, password) => {
      dispatch(registerUser(email, password));
    },
  };
};

const LoginHeaderDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginHeader);

export default LoginHeaderDivs;
