import React from 'react'
import { connect } from 'react-redux'
import { searchForElements } from '../actions'

let SearchForElements = ({ dispatch }) => {
  let input

  return (
    <div id="SearchForElements">
      <form onChange={e => {
        e.preventDefault()
        dispatch(searchForElements(input.value))
      }}>
        <input ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}

SearchForElements = connect()(SearchForElements)

export default SearchForElements