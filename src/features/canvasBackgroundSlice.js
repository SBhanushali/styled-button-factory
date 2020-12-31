import { createSlice } from "@reduxjs/toolkit";

export const canvasBackgroundSlice = createSlice({
  name: "canvasBackground",
  initialState: {
    backgroundType: "Solid",
    backgroundColor: "#ffffff",
    gradientType: "Linear",
    gradientStart: "#ffffff",
    gradientEnd: "#ffffff",
    gradientAngle: 0,
  },
  reducers: {
    setBackgroundType: (state, action) => {
      state.backgroundType = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setGradientType: (state, action) => {
      state.gradientType = action.payload;
    },
    setGradientStart: (state, action) => {
      state.gradientStart = action.payload;
    },
    setGradientEnd: (state, action) => {
      state.gradientEnd = action.payload;
    },
    setGradientAngle: (state, action) => {
      state.gradientAngle = action.payload;
    },
  },
});

export const {
  setBackgroundType,
  setBackgroundColor,
  setGradientType,
  setGradientStart,
  setGradientEnd,
  setGradientAngle,
} = canvasBackgroundSlice.actions;

export default canvasBackgroundSlice.reducer;
