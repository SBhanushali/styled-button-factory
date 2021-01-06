import { createSlice } from "@reduxjs/toolkit";

const buttonDefaultSlice = createSlice({
  name: "buttonDefault",
  initialState: {
    buttonText: "Text",
    font: undefined,
    fontSize: 18,
    fontWeight: undefined,
    textColor: "#000000",
    cursor: undefined,
    paddingX: 0,
    paddingY: 0,
  },
  reducers: {
    setButtonText: (state, action) => {
      state.buttonText = action.payload;
    },
    setFont: (state, action) => {
      state.font = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setFontWeight: (state, action) => {
      state.fontWeight = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setPaddingX: (state, action) => {
      state.paddingX = action.payload;
    },
    setPaddingY: (state, action) => {
      state.paddingY = action.payload;
    },
  },
});

export const {
  setButtonText,
  setFont,
  setFontSize,
  setTextColor,
  setFontWeight,
  setCursor,
  setPaddingX,
  setPaddingY,
} = buttonDefaultSlice.actions;

export default buttonDefaultSlice.reducer;
