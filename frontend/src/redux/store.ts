import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';
import authorizationReducer from './reducers/authorizationReducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
