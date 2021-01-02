import { createSlice } from "@reduxjs/toolkit";

const hoverButtonDefaultSlice = createSlice({
  name: "hoverButtonDefault",
  initialState: {
    fontSize: 0,
    textColor: "#000000",
  },
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
  },
});

export const { setFontSize, setTextColor } = hoverButtonDefaultSlice.actions;

export default hoverButtonDefaultSlice.reducer;
