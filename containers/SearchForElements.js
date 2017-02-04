import React from 'react'
import { connect } from 'react-redux'
import { searchForElements } from '../actions'

//Since this component uses redux, it is considered a container, rather than a presentational component
let SearchForElements = ({ dispatch }) => {
  let input

  return (
    <div id="SearchForElements" className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <form
          onChange={e => {
            //Prevent form submission and subsequent page reload when hitting enter/return
            e.preventDefault()

            //Dispatch an action from the action creator with the value of the input
            dispatch(searchForElements(input.value))
          }}
        >
          <input className="form-control input-md"
            ref={node => {
              //Node refers to this specific element (this input element)
              input = node
            }}
          />
        </form>
      </div>
    </div>
  )
}

SearchForElements = connect()(SearchForElements)

export default SearchForElements