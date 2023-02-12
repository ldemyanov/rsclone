import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';
import lobbyReducer from './reducers/lobbyReducer';
import authorizationReducer from './reducers/authorizationReducer';
import toolReducer from './reducers/toolReducer';
import canvasReducer from './reducers/canvasReducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authorizationReducer,
    lobby: lobbyReducer,
    tool: toolReducer,
    canvas: canvasReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreState: true,
        ignoreActions: true,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
