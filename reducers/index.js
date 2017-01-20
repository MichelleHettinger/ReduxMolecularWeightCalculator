import { combineReducers } from 'redux'
import elementsFound from './elementsFound'

//elementsFound becomes the first key in the state object.
const MWtCalc = combineReducers({
  elementsFound
})

export default MWtCalc