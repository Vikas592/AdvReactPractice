import { ADD_APPLES, REDUCE_APPLES } from '../constants';
import { Action } from '../types';

const appleReducer = (state: number = 0, action: Action): number => {
  switch (action.type) {
    case ADD_APPLES:
      return state + 1;

    case REDUCE_APPLES:
      return state - 1;

    default:
      return state;
  }
};

export default appleReducer;
