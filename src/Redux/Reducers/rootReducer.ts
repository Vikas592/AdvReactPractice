import appleReducer from './appleReducer';
import orangeReducer from './orangeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  apples: appleReducer,
  oranges: orangeReducer,
});

export default rootReducer;
