import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  tool: null,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setTool: (state, action) => {
      return { ...state, tool: action.payload };
    },
  },
});

export const { setTool } = toolSlice.actions;

export default toolSlice.reducer;
