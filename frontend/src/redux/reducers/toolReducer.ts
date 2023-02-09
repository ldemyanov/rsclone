import { createSlice } from '@reduxjs/toolkit';
import { triknessesValues, TTools } from '@src/constants/Draw';

interface IToolsState {
  tool: TTools | null;
  triknesses: number[];
  currentTrikness: number;
}

const initialState: IToolsState = {
  tool: null,
  triknesses: triknessesValues,
  currentTrikness: triknessesValues[2],
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    setStrokeStyle: (state, action) => {
      if (state.tool) state.tool.strokeStyle = action.payload;
    },
    setLineWidth: (state, action) => {
      if (state.tool) {
        state.tool.lineWidth = action.payload;
        state.currentTrikness = Number(action.payload);
      }
    },
  },
});

export const { setTool, setStrokeStyle, setLineWidth } = toolSlice.actions;

export default toolSlice.reducer;
