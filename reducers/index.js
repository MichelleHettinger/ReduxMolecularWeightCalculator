import { combineReducers } from 'redux'
import elementsFound from './elementsFound'
import elementsClicked from './elementClicked'
import massCalculated from './massCalculated'

//Keys to the state object.
const MWtCalc = combineReducers({
  elementsFound,
  elementsClicked,
  massCalculated,
})

export default MWtCalc

