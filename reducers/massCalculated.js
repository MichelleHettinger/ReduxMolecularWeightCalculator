
const massCalculated = (state = 0, action) => {
  switch (action.type) {
    case 'CALCULATE_TOTAL_PLUS':
      const newPlus = state + action.mass
      //console.log(state)
      //console.log(newPlus)

      return newPlus

    case 'CALCULATE_TOTAL_MINUS':
      const newMinus = state - action.mass
      //console.log(state)
      //console.log(newMinus)

      if (newMinus < 0){
        return 0
      }

      return newMinus

    default:
      return state
  }
}

export default massCalculated