import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default store;
