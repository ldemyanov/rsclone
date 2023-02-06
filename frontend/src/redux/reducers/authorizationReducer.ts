import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthorizationState {
    name: string,
    imgId: number,
}

const initialState: AuthorizationState = {
    name: "",
    imgId: 1,
};

export const authorizationSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    setImg: (state, action: PayloadAction<number>) => {
        state.imgId = action.payload;
    }
  },
});

export const { setImg, setName } = authorizationSlice.actions;

export default authorizationSlice.reducer;