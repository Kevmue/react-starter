import { combineReducers } from 'redux';
import { IGlobalState } from '../GlobalState';

export const initialState: IGlobalState = {};

export type Action = { type: 'EXAMPLE' } | { type: 'EXAMPLE2' };

export default combineReducers<IGlobalState>({} as IGlobalState);
