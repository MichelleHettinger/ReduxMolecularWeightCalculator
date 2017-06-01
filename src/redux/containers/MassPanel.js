import { connect } from 'react-redux';
import MassPanel from '../components/MassPanel';

const mapStateToProps = (state) => {
  return {
    molecularWeight: state.massCalculated,
    elementsClicked: state.elementsClicked,
    isLogged: state.user.isLogged,
    userCompounds: state.user.details.compounds,
  };
};

const MassPanelDivs = connect(
  mapStateToProps,
)(MassPanel);

export default MassPanelDivs;
