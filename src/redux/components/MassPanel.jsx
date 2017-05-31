import React from 'react';
import PropTypes from 'prop-types';

const MassPanel = ({ molecularWeight }) => {
  const saveCompoundModal = (
    <div id='saveCompoundModal' className='modal fade'>
      <div id='saveCompoundModalDialog' className='modal-dialog' role='document'>
        <div id='saveCompoundModalContent' className='modal-content'>
          <div id='saveCompoundModalHeader' className='modal-header'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            ><span aria-hidden='true'>&times;</span>
            </button>
            <h3 className='modal-title'>Save Your Compound!</h3>
          </div>
          <div id='saveCompoundModalBody' className='modal-body'>
            <div className='row' >
              <div className='col-sm-offset-2'>
                <div id='formInlineFormula' className='form-inline'>
                  <div className='form-group'>
                    <div id='formulaToSave'>
                      <div id='formulaToSaveLabelDiv'>
                        <p>Formula:</p>
                      </div>
                      ELEMENTSVARIABLEDIV
                    </div>
                  </div>
                </div>
                <div id='formInlineWeight' className='form-inline'>
                  <div className='form-group'>
                    <div id='weightToSave'>
                      <div id='weightToSaveLabelDiv'>
                        <p>Weight:</p>
                      </div>
                      <p>{molecularWeight} g/mol</p>
                    </div>
                  </div>
                </div>
                <div id='formInlineCompoundName' className='form-inline'>
                  <div id='formGroupCompoundName' className='form-group'>
                    <div>
                      <p>Name:</p>
                    </div>
                    <input
                      id='compoundNameInput'
                      type='text'
                      className='form-control input-md'
                      placeholder='Name'
                      //onChange={text => this.getMoleculeName(text.target.value)}
                    />
                    <input
                      id='saveCompoundButton'
                      type='button'
                      value='Save'
                      className='btn btn-success btn-sm'
                      //onClick={this.saveMolecule}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='saveCompoundModalFooter' className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id='massPanel' className='row'>
      <div id='massPanelMolecularWeight' className='col-sm-9'>
        <h3>
          <span>Molecular Weight: </span>
          <span>{molecularWeight.toFixed(3)} </span>
          <span>g/mol</span>
        </h3>
      </div>
      <div id='massPanelButtonsDiv' className='pull-right'>
        <button
          id='massPanelSaveButton'
          type='button'
          data-toggle='modal'
          data-target='#saveCompoundModal'
          className='btn btn-success btn-sm'
        >Save</button>
        <button
          id='massPanelClearButton'
          type='button'
          className='btn btn-sm btn-secondary'
        >Clear</button>
      </div>
      {saveCompoundModal}
    </div>
  );
};

MassPanel.propTypes = {
  molecularWeight: PropTypes.number.isRequired,
};

export default MassPanel;
