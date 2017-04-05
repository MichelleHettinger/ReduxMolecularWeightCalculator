import React, { PropTypes } from 'react';

//Since this component uses redux, it is considered a container,
//rather than a presentational component
let input;
const SearchForElements = ({ onKeyboardInput }) => (
  <div id='SearchForElements' className='row'>
    <div className='col-sm-6 col-sm-offset-3'>
      <form
        onChange={ (e) => {
          //Prevent form submission and subsequent page reload when hitting enter/return
          e.preventDefault();

          //Dispatch an action from the action creator with the value of the input
          onKeyboardInput(input.value);
        } }
      >
        <input
          className='form-control input-md'
          ref={ (node) => {
            //Node refers to this specific element (this input element)
            input = node;
          } }
        />
      </form>
    </div>
  </div>
);

SearchForElements.propTypes = {
  onKeyboardInput: PropTypes.func.isRequired,
};

export default SearchForElements;
