import { createSlice } from "@reduxjs/toolkit";

export const buttonBorderSlice = createSlice({
  name: "buttonBorder",
  initialState: {
    hasBorder: true,
    borderType: "solid",
    borderColor: "#000000",
    borderWidth: 1,
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
} = buttonBorderSlice.actions;

export default buttonBorderSlice.reducer;
