import { createSlice } from '@reduxjs/toolkit';
import { triknessesValues, TTools } from '@src/constants/Draw';
import { palleteColors } from '@src/constants/Pallete';

interface IToolsState {
  tool: TTools | null;
  triknesses: number[];
  currentTrikness: number;
  colors: string[];
  currentColor: string;
  opacity: string;
}

const initialState: IToolsState = {
  tool: null,
  triknesses: triknessesValues,
  currentTrikness: triknessesValues[2],
  colors: palleteColors,
  currentColor: '#000000',
  opacity: 'ff',
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
      state.tool!.strokeStyle = state.currentColor + state.opacity;
    },
    setStrokeStyle: (state, action) => {
      if (state.tool) {
        state.tool.strokeStyle = action.payload + state.opacity;
        state.currentColor = action.payload;
      }
    },
    setLineWidth: (state, action) => {
      if (state.tool) {
        state.tool.lineWidth = action.payload;
        state.currentTrikness = Number(action.payload);
      }
    },
    setOpacity: (state, action) => {
      console.log('opacity');
      if (state.tool) {
        state.tool.strokeStyle = state.currentColor + action.payload;
        state.opacity = action.payload;
      }
    },
  },
});

export const { setTool, setStrokeStyle, setLineWidth, setOpacity } = toolSlice.actions;

export default toolSlice.reducer;
