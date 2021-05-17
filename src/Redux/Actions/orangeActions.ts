import { ADD_ORANGES, REDUCE_ORANGES } from '../constants';
import { Action } from '../types';

export const addOranges = (): Action => ({ type: ADD_ORANGES });
export const reduceOranges = (): Action => ({ type: REDUCE_ORANGES });
