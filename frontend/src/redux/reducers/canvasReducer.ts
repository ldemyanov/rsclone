import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCanvasElement } from '@src/types';

interface ICanvasState {
  canvas: TCanvasElement;
}

const initialState: ICanvasState = {
  canvas: null,
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setCanvas: (state, action: PayloadAction<TCanvasElement>) => {
      return {
        ...state,
        canvas: action.payload,
      };
    },
  },
});

export const { setCanvas } = canvasSlice.actions;

export default canvasSlice.reducer;
