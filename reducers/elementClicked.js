//If state doesn't exist, it becomes an empty array.
//If there is an action type called 'PIN_ELEMENT', append the selected element to the array.
//Otherwise return state.
const elementClicked = (state = [], action) => {

  switch (action.type) {
    case 'PIN_ELEMENT':
    	//Push the new element into the state array
      return [...state, action.element]

    default:
      return state
  }
}

export default elementClicked