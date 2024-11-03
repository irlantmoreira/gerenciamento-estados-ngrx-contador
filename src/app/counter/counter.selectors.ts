import { IAppState } from '../inteface/iapp-state';

export const counterSelector = (appState: IAppState) => appState.counter;
