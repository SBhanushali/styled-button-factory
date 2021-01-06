import { createSlice } from "@reduxjs/toolkit";

const hoverButtonDefaultSlice = createSlice({
  name: "hoverButtonDefault",
  initialState: {
    enableHover: false,
    fontSize: 14,
    textColor: "#000000",
  },
  reducers: {
    setEnableHover: (state, action) => {
      state.enableHover = !state.enableHover;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
  },
});

export const {
  setEnableHover,
  setFontSize,
  setTextColor,
} = hoverButtonDefaultSlice.actions;

export const syncDefault = () => (dispatch, getState) => {
  const { fontSize, textColor } = getState().present.buttonDefault;
  dispatch(setFontSize(fontSize));
  dispatch(setTextColor(textColor));
};

export default hoverButtonDefaultSlice.reducer;
