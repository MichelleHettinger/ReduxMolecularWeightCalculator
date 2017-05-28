import { elementPicker } from '../utils/helper';

import {
  DO_PLUS,
  DO_MINUS,
  CALCULATE_TOTAL_PLUS,
  CALCULATE_TOTAL_MINUS,
  REMOVE_ELEMENT,
  PIN_ELEMENT,
  SEARCH_ELEMENT,
} from '../constants/actions';

export const doPlus = (id) => {
  return {
    type: DO_PLUS,
    id,
  };
};

export const doMinus = (id, multiplier) => {
  switch (multiplier) {
    case 1: {
      return {
        type: REMOVE_ELEMENT,
        id,
      };
    }

    default:
      return {
        type: DO_MINUS,
        id,
      };
  }
};

export const calculateTotal = (mass, pm) => {
  switch (pm) {
    case 'MINUS':
      return {
        type: CALCULATE_TOTAL_MINUS,
        mass,
      };

    default:
      return {
        type: CALCULATE_TOTAL_PLUS,
        mass,
      };
  }
};

let nextAtomId = 0;
export const pinElement = (element) => {
  return {
    type: PIN_ELEMENT,
    id: nextAtomId++,
    mass: element.mass,
    acronym: element.acronym,
    multiplier: element.multiplier,
  };
};

export const searchForElements = (text) => {
  const elementsFound = elementPicker(text);

  return {
    type: SEARCH_ELEMENT,
    elementsFound,
  };
};
