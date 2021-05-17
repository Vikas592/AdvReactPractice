import { ADD_ORANGES, REDUCE_ORANGES } from '../constants';
import { Action } from '../types';

const orangeReducer = (state: number = 0, action: Action): number => {
  switch (action.type) {
    case ADD_ORANGES:
      return state + 1;

    case REDUCE_ORANGES:
      return state - 1;

    default:
      return state;
  }
};

export default orangeReducer;
