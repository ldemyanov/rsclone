import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer } from '@src/types';
// import { Players } from '@src/utils/Players';

export interface LobbyState {
  players: IPlayer[];
}

const initialState: LobbyState = {
  players: [],
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
    }
  },
});

export const { setPlayer, setPlayers } = lobbySlice.actions;

export default lobbySlice.reducer;
