import React, { PropTypes } from 'react'

const CalculationPanel = ({ elementsClicked, onPlusClick, onMinusClick, onElementClick }) => {

  let PID
  let obj = {}

  //Map over every element based off of its parenId
  //Push the elements with the same parenId into their respective arrays within obj
  const getParen = elementsClicked.map( (element,i) => {
    PID = element.parenId
    const parenID = 'paren_' + PID

    if (obj[parenID]) {
      obj[parenID].push(element)
    } else {
      obj[parenID] = []
      obj[parenID].push(element)
    }
  })

  //Map over every array within obj.
  //Then return element buttons either with left, right or no parenthesis.
  const elements = Object.keys(obj).map( (key) => {
    //console.log(obj[key])
    return obj[key].map( (element, i) => {
      //console.log(obj[key].length)

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

      const elemInParen = (
        <div className="elementSelected">
          {elemPlusClick}
          <div style={{padding:0}}>
            <p style={{fontSize:25}}>{element.acronym}{multiplier(element.multiplier)}</p>
          </div>
          {elemMinusClick}
        </div>
      )
      const elemNoParen = (
        <div className="elementSelected">
          {elemPlusClick}
          <div onClick={() => onElementClick(element.id, element.clicked)}>
            <p style={{fontSize:25}}
              className={clicked(element.clicked)}
            >{element.acronym}{multiplier(element.multiplier)}</p>
          </div>
          {elemMinusClick}
        </div>
      )

      const leftParen = (
        <div>
          <p style={{fontSize:47}}>(</p>
        </div>
      )
      const rightParen = (
        <div style={{display:"inline-flex"}}>
          <div>
            <p style={{fontSize:47}}>)</p>
          </div>

          <div>
            <div className="btn btn-xs">
              <p>+</p>
            </div>
            <div>
              <p>1</p>
            </div>
            <div className="btn btn-xs">
              <p>-</p>
            </div>
          </div>

        </div>
      )


      //No parenthesis required
      if (element.parenId < 0) {
        return (
          <div key={i}>
            {elemNoParen}
          </div>
        ) 
      }
      //Parenthesis required
      else {
        //First element of parentheses
        if (i === 0) {
          return (
            <div key={i} style={{display:"inline-flex"}}>
              {leftParen}
              {elemInParen}
            </div>
          )
        //Last element of parentheses
        } else if (i === (obj[key].length - 1)) {
          return (
            <div key={i} style={{display:"inline-flex"}}>
              {elemInParen}
              {rightParen}
            </div>
          )
        //Middle elements of parentheses
        } else {
          return (
            <div key={i}>
              {elemInParen}
            </div>
          )
        }
      }
    })
  })

  console.log(obj)

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