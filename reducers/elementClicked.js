//If state doesn't exist, it becomes an empty array.
//If there is an action type called 'PIN_ELEMENT', append the selected element to the array.
//Otherwise return state.
const elementClicked = (state = [], action) => {
  switch (action.type) {
    case 'PIN_ELEMENT':
    	//Return an array containing the contents of state and push action.element into that array
      return [...state, action.element]

    case 'PLUS_MINUS':

      state[action.i].multiplier = action.multiplier
      //console.log(state)
      return state

    case 'REMOVE_ELEMENT':

      state = state.splice(action.i,1)

      return state

    default:
      return state
  }
}

export default elementClicked