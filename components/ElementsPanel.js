import React, { PropTypes } from 'react'

const ElementsPanel = ({ elementsFound, onElementClick }) => (

  <div id="DisplayElements" className="row">
    {elementsFound.map( (element,i) =>
      <div key={i} className="elementFound col-sm-3" onClick={() => onElementClick(element)}>
        <p>{element.atomicNumber}</p>
        <p>{element.acronym}</p>
        <p>{element.mass}</p>
      </div>
    )}
  </div>
)
 
ElementsPanel.propTypes = {
  elementsFound: PropTypes.arrayOf(PropTypes.shape({
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    atomicNumber: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired
}

export default ElementsPanel