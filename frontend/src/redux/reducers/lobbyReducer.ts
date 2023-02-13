import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer } from '@src/types';

export interface LobbyState {
  players: IPlayer[];
  roomID: string;
}

const initialState: LobbyState = {
  players: [],
  roomID: '',
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
  },
});

export const { setPlayer, setPlayers, setRoomID } = lobbySlice.actions;

export default lobbySlice.reducer;
