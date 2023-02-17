import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISoloImage {
  word: string,
  img: string,
}

interface ISoloResult extends ISoloImage {
  response: string;
}

interface SoloGameState {
  images: ISoloImage[];
  results: ISoloResult[];
}

const initialState: SoloGameState = {
  images: [],
  results: [],
};

export const soloGameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ISoloImage[]>) => {
      state.images = action.payload;
    },
    addResult: (state, action: PayloadAction<ISoloResult>) => {
      state.results = [...state.results, action.payload];
    }
  },
});

export const {setImages, addResult} = soloGameSlice.actions;

export default soloGameSlice.reducer;
