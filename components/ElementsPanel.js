import React, { PropTypes } from 'react'

const ElementsPanel = ({ elementsFound }) => (

  <div id="DisplayElements" className="row">
    {elementsFound.map( (element,i) =>
      <div key={i} className="elementFound col-sm-3">
        <p key={i}>{element.atomicNumber}</p>
        <p style={{textAlign:'center'}}>{element.acronym}</p>
        <p style={{textAlign:'center'}}>{element.mass}</p>
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
  //onTodoClick: PropTypes.func.isRequired
}

export default ElementsPanel