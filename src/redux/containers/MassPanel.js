import { connect } from 'react-redux';
import MassPanel from '../components/MassPanel';
import { saveCompound } from '../actions/savecompound';
import { deleteCompound } from '../actions/deletecompound';

const mapStateToProps = (state) => {
  return {
    molecularWeight: state.massCalculated,
    elementsClicked: state.elementsClicked,
    isLogged: state.user.isLogged,
    userCompounds: state.user.details.compounds,
    userID: state.user.details._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewCompound: (userId, newCompound) => {
      dispatch(saveCompound(userId, newCompound));
    },
    deleteOldCompound: (userId, oldCompound) => {
      dispatch(deleteCompound(userId, oldCompound));
    },
  };
};
const MassPanelDivs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MassPanel);

export default MassPanelDivs;
