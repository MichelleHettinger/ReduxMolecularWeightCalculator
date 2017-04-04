import { connect } from 'react-redux';
import MassPanel from '../components/MassPanel';

const mapStateToProps = (state) => {
  return {
    molecularWeight: state.massCalculated,
  }
}

const MassPanelDivs = connect(
  mapStateToProps
)(MassPanel);

export default MassPanelDivs;