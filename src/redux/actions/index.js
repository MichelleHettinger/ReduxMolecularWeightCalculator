import { elementPicker } from '../utils/helper';

let clickCount = 0;
let parenID = 0;

export const doParenthesis = (id) => {
  switch (clickCount) {
    case 0: {
      clickCount++;
      return {
        type: 'DO_PAREN_A',
        clickCount: 1,
        id,
      };
    }

    case 1: {
      clickCount = 0;
      return {
        type: 'DO_PAREN_B',
        clickCount: 2,
        parenID: parenID++,
        id,
      };
    }

    default:
      return false;
  }
};

export const doPlus = (id) => {
  return {
    type: 'DO_PLUS',
    id,
  };
};

export const doMinus = (id, multiplier) => {
  switch (multiplier) {
    case 1: {
      return {
        type: 'REMOVE_ELEMENT',
        id,
      };
    }

    default:
      return {
        type: 'DO_MINUS',
        id,
      };
  }
};

export const calculateTotal = (mass, pm) => {
  switch (pm) {
    case 'MINUS':
      return {
        type: 'CALCULATE_TOTAL_MINUS',
        mass,
      };

    default:
      return {
        type: 'CALCULATE_TOTAL_PLUS',
        mass,
      };
  }
};

let nextAtomId = 0;
export const pinElement = (element) => {
  return {
    type: 'PIN_ELEMENT',
    id: nextAtomId++,
    mass: element.mass,
    acronym: element.acronym,
    multiplier: element.multiplier,
  };
};

export const searchForElements = (text) => {
  const elementsFound = elementPicker(text);
  //console.log(elementsFound)
  return {
    type: 'SEARCH_ELEMENT',
    elementsFound,
  };
};
