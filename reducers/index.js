import { combineReducers } from 'redux'
import elementsFound from './elementsFound'

//elemensFound and visibiltyFilter are states accessed from anywhere in the app

const MWtCalc = combineReducers({
  elementsFound
})

export default MWtCalc