import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer } from '@src/types';

export interface LobbyState {
  players: IPlayer[];
  roomID: string;
  selfID: string;
  isMain: boolean;
}

const initialState: LobbyState = {
  players: [],
  roomID: '',
  selfID: '',
  isMain: false,
};

export const lobbySlice = createSlice({
  name: 'lobby',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<IPlayer>) => {
      state.players = [...state.players, action.payload];
    },
    setPlayers: (state, action: PayloadAction<IPlayer[]>) => {
      state.players = action.payload;
    },
    setRoomID: (state, action: PayloadAction<string>) => {
      state.roomID = action.payload;
    },
    setSelfData: (state, action: PayloadAction<{ userId: string; main: boolean }>) => {
      state.selfID = action.payload.userId;
      state.isMain = action.payload.main;
    },
    removePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter((player) => player.userId !== action.payload);
    },
  },
});

export const { setPlayer, setPlayers, setRoomID, setSelfData, removePlayer } = lobbySlice.actions;

export default lobbySlice.reducer;
