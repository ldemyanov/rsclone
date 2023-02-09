import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  searchGuess: string;
  searchWrite: string;
}

const initialState: GameState = {
  searchGuess: '',
  searchWrite: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSearchGuess: (state, action: PayloadAction<string>) => {
      state.searchGuess = action.payload;
    },
    setSearchWrite: (state, action: PayloadAction<string>) => {
      state.searchWrite = action.payload;
    },
  },
});

export const { setSearchGuess, setSearchWrite } = gameSlice.actions;

export default gameSlice.reducer;
