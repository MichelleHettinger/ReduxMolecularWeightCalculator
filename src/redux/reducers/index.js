import { combineReducers } from 'redux';
import elementsFound from './elementsFound';
import elementsClicked from './elementClicked';
import massCalculated from './massCalculated';
import async from './async';

//Keys to the state object.
const MWtCalc = combineReducers({
  elementsFound,
  elementsClicked,
  massCalculated,
  async,
});

export default MWtCalc;

