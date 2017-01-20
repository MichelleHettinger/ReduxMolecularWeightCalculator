import React from 'react'
import { connect } from 'react-redux'
import { searchForElements } from '../actions'

let SearchForElements = ({ dispatch }) => {
  let input

  return (
    <div id="SearchForElements" className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <form
          onChange={willSubmit => {
            //Prevent form submission and subsequent page reload when hitting enter/return
            willSubmit.preventDefault()

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