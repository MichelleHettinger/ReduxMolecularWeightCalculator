
const searchForElements = (state = [], action) => {
  //If state doesn't exist, it becomes an empty array.
  //If there is an action type called 'SEARCH_ELEMENT', then return elementsFound to reducer index
  //Otherwise return state.
  switch (action.type) {
    case 'SEARCH_ELEMENT':
      return action.elementsFound

    default:
      return state
  }
}

export default searchForElements