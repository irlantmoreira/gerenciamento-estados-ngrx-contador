import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from '../counter/counter.reducer';
import { IAppState } from '../inteface/iapp-state';

export const appReducers: ActionReducerMap<IAppState> = {
  counter: counterReducer,
};
