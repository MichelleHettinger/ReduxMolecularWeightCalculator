import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked, onPlusClick, onMinusClick }) => {

  let PID
  let obj = {}

  //Map over every element based off of its parenId
  //Push the elements with the same parenId into their respective arrays within obj
  const getParen = elementsClicked.map( (element,i) => {

    if (i === 0) {

      PID = element.parenId
      const parenID = 'paren_' + PID
      obj[parenID] = []
      obj[parenID].push(element)
      //console.log(obj)

    } else {

      if (PID === element.parenId) {

        const parenID = 'paren_' + PID
        obj[parenID].push(element)
        //console.log(obj)

      } else {

        PID = element.parenId
        const parenID = 'paren_' + PID
        obj[parenID] = []
        obj[parenID].push(element)

      }
    }
  })

  //Map over every array within obj.
  //Then return element buttons either with left, right or no parenthesis.
  const elements = Object.keys(obj).map( (key) => {
    //console.log(obj[key])
    return obj[key].map( (element, i) => {
      //console.log(obj[key].length)

      const elementNoParen = (
        <div key={i} className="elementSelected col-sm-1">
          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onPlusClick(element.id, element.mass)}>
            <p>+</p>
          </div>

          <div>
            <p>{element.acronym} {element.multiplier}</p>
          </div>

          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onMinusClick(element.id, element.multiplier, element.mass)}>
            <p>-</p>
          </div>
        </div>
      )
      const elementLeftParen = (
        <div key={i} className="elementSelected col-sm-1">
          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onPlusClick(element.id, element.mass)}>
            <p>+</p>
          </div>
          
          <div>
            <p>( {element.acronym} {element.multiplier}</p>
          </div>

          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onMinusClick(element.id, element.multiplier, element.mass)}>
            <p>-</p>
          </div>
        </div>
      )
      const elementRightParen = (
        <div key={i} className="elementSelected col-sm-1">
          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onPlusClick(element.id, element.mass)}>
            <p>+</p>
          </div>
          
          <div>
            <p>{element.acronym} {element.multiplier} )</p>
          </div>

          <div className="btn btn-xs btn-primary p-m"
            onClick={() => onMinusClick(element.id, element.multiplier, element.mass)}>
            <p>-</p>
          </div>
        </div>
      )

      //No parenthesis required
      if (element.parenId < 0) {
        return elementNoParen
      }
      //Parenthesis required
      else {
        //First element of parentheses
        if (i === 0) {
            return elementLeftParen
        //Last element of parentheses
        } else if (i === (obj[key].length - 1)) {
            return elementRightParen
        //Middle elements of parentheses
        } else {
            return elementNoParen
        }
      }
    })
  })

  return (
    <div id="CalculationPanel" className="row">
      {elements}
    </div>
  )
}

CalculationPanel.propTypes = {
  elementsClicked: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mass: PropTypes.number.isRequired,
    acronym: PropTypes.string.isRequired,
    multiplier: PropTypes.number.isRequired,
    parenId: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
}

export default CalculationPanel