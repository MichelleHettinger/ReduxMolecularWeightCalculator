import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const ElementsPanel = ({ elementsFound, onElementClick }) => (

  <div id='elementsPanelRow' className='row'>
    {
      elementsFound.map((element) => {
        return (
          <button
            className='elementFoundButton col-sm-3'
            key={ shortid.generate() }
            onClick={ () => onElementClick(element) }
          >
            <p>{element.atomicNumber}</p>
            <p>{element.acronym}</p>
            <p>{element.name}</p>
            <p>{element.mass.toFixed(3)}</p>
          </button>
        );
      })
    }
  </div>
);

ElementsPanel.propTypes = {
  elementsFound: PropTypes.arrayOf(PropTypes.shape({
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    atomicNumber: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired,
};

export default ElementsPanel;
