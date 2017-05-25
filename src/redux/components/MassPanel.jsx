import React from 'react';
import PropTypes from 'prop-types';

const MassPanel = ({ molecularWeight }) => (
  <div id='massPanel' className='row'>
    <p>{molecularWeight.toFixed(3)}</p>
  </div>
);

MassPanel.propTypes = {
  molecularWeight: PropTypes.number.isRequired,
};

export default MassPanel;
