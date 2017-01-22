import { combineReducers } from 'redux'
import elementsFound from './elementsFound'
import elementsClicked from './elementClicked'

//elementsFound becomes the first key in the state object.
const MWtCalc = combineReducers({
  elementsFound,
  elementsClicked,
})

export default MWtCalc