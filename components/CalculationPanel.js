import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked }) => (

  <div id="CalculationPanel" className="row">
    {elementsClicked.map( (element,i) =>
      <div key={i} className="elementSelected col-sm-1">
        <div className="btn btn-xs btn-primary p-m">
          <p>+</p>
        </div>

        <p>{element.acronym}</p>

        <div className="btn btn-xs btn-primary p-m">
          <p>-</p>
        </div>
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