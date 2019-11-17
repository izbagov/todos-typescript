import { combineReducers } from 'redux';

import app from './app';
import filter from './visibilityFilters';

const rootReducer = combineReducers({
  app,
  filter
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
