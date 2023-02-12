import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlayerIconLeo from '@assets/images/player_icon_leo.png';

export interface AuthorizationState {
    name: string,
    icon: string,
}

const initialState: AuthorizationState = {
    name: "",
    icon: PlayerIconLeo,
};

export const authorizationSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    setImg: (state, action: PayloadAction<string>) => {
        state.icon = action.payload;
    }
  },
});

export const { setImg, setName } = authorizationSlice.actions;

export default authorizationSlice.reducer;