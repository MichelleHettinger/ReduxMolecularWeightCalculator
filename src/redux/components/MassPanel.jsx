import React from 'react';
import PropTypes from 'prop-types';

const MassPanel = ({ molecularWeight }) => (
  <div id='massPanel' className='row'>

    <div id='massPanelMolecularWeight' className='col-sm-9'>
      <h3>
        <span>Molecular Weight: </span>
        <span>{molecularWeight.toFixed(3)}</span>
        <span> g/mol</span>
      </h3>
    </div>
    <div id='massPanelButtonsDiv' className='pull-right'>
      <button
        id='massPanelSaveButton'
        type='button'
        data-toggle='modal'
        data-target='#saveModal'
        className='btn btn-success btn-sm'
      >Save</button>
      <button
        id='massPanelClearButton'
        type='button'
        className='btn btn-sm btn-secondary'
      >Clear</button>
    </div>

  </div>
);

MassPanel.propTypes = {
  molecularWeight: PropTypes.number.isRequired,
};

export default MassPanel;
