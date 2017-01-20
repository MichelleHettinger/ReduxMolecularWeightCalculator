import React, { PropTypes } from 'react'

const ElementsPanel = ({ elementsFound }) => (

  <div id="DisplayElements">
    {elementsFound.map( (element,i) =>
      <div key={i} className="elementFound">
        <p key={i}>{element.atomicNumber}</p>
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
  //onTodoClick: PropTypes.func.isRequired
}

export default ElementsPanel