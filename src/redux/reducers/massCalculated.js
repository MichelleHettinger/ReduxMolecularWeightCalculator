import {
  CALCULATE_TOTAL_PLUS,
  CALCULATE_TOTAL_MINUS,
} from '../constants/actions';

const massCalculated = (state = 0, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL_PLUS: {
      const newPlus = state + action.mass;

      return newPlus;
    }

    case CALCULATE_TOTAL_MINUS: {
      const newMinus = state - action.mass;

      if (newMinus < 0) {
        return 0;
      }

      return newMinus;
    }

    default:
      return state;
  }
};

export default massCalculated;
