import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked, onPlusClick, onMinusClick }) => (

  <div id="CalculationPanel" className="row">
    {elementsClicked.map( (element,i) =>
      <div key={i} className="elementSelected col-sm-1">
        <div className="btn btn-xs btn-primary p-m" onClick={() => onPlusClick(element.id)}>
          <p>+</p>
        </div>

        <p>{element.acronym} {element.multiplier}</p>

        <div className="btn btn-xs btn-primary p-m" onClick={() => onMinusClick(element.id, element.multiplier)}>
          <p>-</p>
        </div>
      </div>
    )}
  </div>
)
 
CalculationPanel.propTypes = {
  elementsClicked: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mass: PropTypes.number.isRequired,
    acronym: PropTypes.string.isRequired,
    multiplier: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
}

export default CalculationPanel