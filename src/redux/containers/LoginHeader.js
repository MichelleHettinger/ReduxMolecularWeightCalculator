import { connect } from 'react-redux';
import { findUser } from '../actions/login';
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
  };
};

const LoginHeaderDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginHeader);

export default LoginHeaderDivs;
