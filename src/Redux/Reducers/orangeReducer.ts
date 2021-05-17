import { ADD_ORANGES, REDUCE_ORANGES } from '../constants';
import { Action, OrangeState } from '../types';

const initialOrangeState: OrangeState = {
  oranges: 0,
};
const orangeReducer = (state: OrangeState = initialOrangeState, action: Action): OrangeState => {
  switch (action.type) {
    case ADD_ORANGES:
      return { oranges: state.oranges + 1 };

    case REDUCE_ORANGES:
      return { oranges: state.oranges - 1 };

    default:
      return state;
  }
};

export default orangeReducer;
