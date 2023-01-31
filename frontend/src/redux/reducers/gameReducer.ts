import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {}

const initialState: GameState = {};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // set: (state, action: PayloadAction<>) => {
    // }
  },
});

// export const {} = gameSlice.actions;

export default gameSlice.reducer;
