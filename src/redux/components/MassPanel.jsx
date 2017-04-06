import React, { PropTypes } from 'react';

const MassPanel = ({ molecularWeight }) => (
  <div id='massPanel' className='row'>
    <p>{molecularWeight.toFixed(3)}</p>
  </div>
);

MassPanel.propTypes = {
  molecularWeight: PropTypes.number.isRequired,
};

export default MassPanel;
