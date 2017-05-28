import {
  DO_PAREN_A,
  DO_PAREN_B,
} from '../constants/actions';

let clickCount = 0;
let parenID = 0;

const doParenthesis = (id) => {
  switch (clickCount) {
    case 0: {
      clickCount++;
      return {
        type: DO_PAREN_A,
        clickCount: 1,
        id,
      };
    }

    case 1: {
      clickCount = 0;
      return {
        type: DO_PAREN_B,
        clickCount: 2,
        parenID: parenID++,
        id,
      };
    }

    default:
      return false;
  }
};

export default doParenthesis;
