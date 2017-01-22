import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked, onPMClick }) => (

  <div id="CalculationPanel" className="row">
    {elementsClicked.map( (element,i) =>
      <div key={i} className="elementSelected col-sm-1" onClick={() => onPMClick(element, i, '+')}>
        <div className="btn btn-xs btn-primary p-m">
          <p>+</p>
        </div>

        <p>{element.acronym} {element.multiplier}</p>

        <div className="btn btn-xs btn-primary p-m" onClick={() => onPMClick(element, i, '-')}>
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
    atomicNumber: PropTypes.number.isRequired,
    multiplier: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onPMClick: PropTypes.func.isRequired
}

export default CalculationPanel