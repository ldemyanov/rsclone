import { createSlice } from '@reduxjs/toolkit';
// import { PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  game: [];
}

const initialState: GameState = {
  game: [],
};

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
