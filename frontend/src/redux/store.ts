import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';
import lobbyReducer from './reducers/lobbyReducer';
import authorizationReducer from './reducers/authorizationReducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authorizationReducer,
    lobby: lobbyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
