
const editElement = (state = {}, action) => {
  switch (action.type) {

    case 'PIN_ELEMENT':

      return {
        id: action.id,
        mass: action.mass,
        acronym:action.acronym,
        multiplier:action.multiplier
      }
 
    case 'DO_PLUS':
      //console.log(state)
      //console.log(action)

      //If the element being mapped wasn't what the user clicked.
      if (state.id != action.id) {
        return state
      }

      //Create and return a new object that is exactly like state,
      //except with the multiplier incremented by 1
      return Object.assign({}, state, {
        multiplier: state.multiplier+=1
      })

    case 'DO_MINUS':
      //If the element being mapped wasn't what the user clicked.
      if (state.id != action.id) {
        return state
      }

      //Create and return a new object that is exactly like state,
      //except with the multiplier decremented by 1
      return Object.assign({}, state, {
        multiplier: state.multiplier-=1
      })

    case 'REMOVE_ELEMENT':
      //If the element being mapped wasn't what the user clicked.
      if (state.id != action.id) {
        return state
      }
      //To find element in state array
      return 1

    default:
      return state
  }

}

//If state doesn't exist, it becomes an empty array.
//If there is an action type called 'PIN_ELEMENT', append the selected element to the array.
//Otherwise return original/previous state
const elementClicked = (state = [], action) => {
  switch (action.type) {
    case 'PIN_ELEMENT':
      //console.log(state)
      //console.log([...state, editElement(undefined, action)])

      //Return an array containing the contents of state and push action.element into that array
      return [...state, editElement(undefined, action)]

    case 'DO_PLUS':
      //Map over all elements and make changes as needed
      return state.map(t => editElement(t, action))

    case 'DO_MINUS':
      //Map over all elements and make changes as needed
      return state.map(t => editElement(t, action))

    case 'REMOVE_ELEMENT':
      //Map over all elements and make changes as needed
      let newState = state.map(t => editElement(t, action))
      newState.splice( newState.indexOf(1), 1 )

      //console.log(state)
      //console.log(newState)

      return newState

    default:
      return state
  }
}

export default elementClicked