import { createSlice } from "@reduxjs/toolkit";

export const hoverButtonBorderSlice = createSlice({
  name: "hoverButtonBorder",
  initialState: {
    hasBorder: true,
    borderType: undefined,
    borderColor: "#ffffff",
    borderWidth: 0,
    borderRadius: 0,
  },
  reducers: {
    setHasBorder: (state, action) => {
      state.hasBorder = !state.hasBorder;
    },
    setBorderType: (state, action) => {
      state.borderType = action.payload;
    },
    setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
    setBorderWidth: (state, action) => {
      state.borderWidth = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  setHasBorder,
  setBorderType,
  setBorderColor,
  setBorderWidth,
  setBorderRadius,
} = hoverButtonBorderSlice.actions;

export default hoverButtonBorderSlice.reducer;
