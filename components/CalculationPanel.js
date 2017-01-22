import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked }) => (

  <div id="CalculationPanel" className="row">
    {elementsClicked.map( (element,i) =>
      <div key={i} className="elementSelected col-sm-1">
        <p key={i}>+</p>
        <p>{element.acronym}</p>
        <p>-</p>
      </div>
    )}
  </div>
)
 
CalculationPanel.propTypes = {
  elementsClicked: PropTypes.arrayOf(PropTypes.shape({
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    atomicNumber: PropTypes.number.isRequired
  }).isRequired).isRequired,
  //onElementClick: PropTypes.func.isRequired
}

export default CalculationPanel