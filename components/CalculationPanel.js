import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked, onPlusClick, onMinusClick, onElementClick }) => {

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

      const elemPlusClick = (
        <div className="btn btn-xs btn-primary p-m"
          onClick={() => onPlusClick(element.id, element.mass)}>
          <p>+</p>
        </div>
      )
      const elemMinusClick = (
        <div className="btn btn-xs btn-primary p-m"
          onClick={() => onMinusClick(element.id, element.multiplier, element.mass)}>
          <p>-</p>
        </div>
      )


      const multiplier = (multi) => {
        if (multi === 1){
          return
        }
        return multi
      }
      const clicked = (clickBool) => {
        if (clickBool){
          return 'activeElement'
        }
        return 'inactiveElement'
      }


      const elementNoParen = (
        <div onClick={() => onElementClick(element.id, element.clicked)}>
          <p className={clicked(element.clicked)}>
            {element.acronym} {multiplier(element.multiplier)}
          </p>
        </div>
      )
      const elementNoParenInParen = (
        <div>
          <p>{element.acronym} {multiplier(element.multiplier)}</p>
        </div>
      )
      const elementLeftParen = (
        <div>
          <p>( {element.acronym} {multiplier(element.multiplier)}</p>
        </div>
      )
      const elementRightParen = (
        <div>
          <p>{element.acronym} {multiplier(element.multiplier)} )</p>
        </div>
      )

      //No parenthesis required
      if (element.parenId < 0) {
        return (
          <div key={i} className="elementSelected col-sm-1">
            {elemPlusClick}
            {elementNoParen}
            {elemMinusClick}
          </div>
        )
      }
      //Parenthesis required
      else {
        //First element of parentheses
        if (i === 0) {
          return (
            <div key={i} className="elementSelected col-sm-1">
              {elemPlusClick}
              {elementLeftParen}
              {elemMinusClick}
            </div>
          )
        //Last element of parentheses
        } else if (i === (obj[key].length - 1)) {
          return (
            <div key={i} className="elementSelected col-sm-1">
              {elemPlusClick}
              {elementRightParen}
              {elemMinusClick}
            </div>
          )
        //Middle elements of parentheses
        } else {
          return (
            <div key={i} className="elementSelected col-sm-1">
              {elemPlusClick}
              {elementNoParenInParen}
              {elemMinusClick}
            </div>
          )
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
    clicked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired
}

export default CalculationPanel