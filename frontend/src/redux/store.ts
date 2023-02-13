import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
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
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;