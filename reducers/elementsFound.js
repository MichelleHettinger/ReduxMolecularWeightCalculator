
const searchForElements = (state = [], action) => {
  //console.log(action)
  switch (action.type) {
    case 'SEARCH_ELEMENT':
      return action.elementsFound

    default:
      return state
  }
}

export default searchForElements