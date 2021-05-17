import { ADD_APPLES, REDUCE_APPLES } from '../constants';
import { Action } from '../types';

export const addApples = (): Action => ({ type: ADD_APPLES });
export const reduceApples = (): Action => ({ type: REDUCE_APPLES });
