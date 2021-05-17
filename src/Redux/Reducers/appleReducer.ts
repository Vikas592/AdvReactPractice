import { ADD_APPLES, REDUCE_APPLES } from '../constants';
import { Action, AppleState } from '../types';

const initialAppleState: AppleState = {
  apples: 0,
};
const appleReducer = (state: AppleState = initialAppleState, action: Action): AppleState => {
  switch (action.type) {
    case ADD_APPLES:
      return { apples: state.apples + 1 };

    case REDUCE_APPLES:
      return { apples: state.apples - 1 };

    default:
      return state;
  }
};

export default appleReducer;
