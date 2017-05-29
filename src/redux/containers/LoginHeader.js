import { connect } from 'react-redux';
import { findUser } from '../actions/login';
import LoginHeader from '../components/LoginHeader';

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: (email, password) => {
      dispatch(findUser(email, password));
    },
  };
};

const LoginHeaderDivs = connect(
  null,
  mapDispatchToProps,
)(LoginHeader);

export default LoginHeaderDivs;
