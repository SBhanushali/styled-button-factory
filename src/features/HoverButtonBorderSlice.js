import { createSlice } from "@reduxjs/toolkit";

export const hoverButtonBorderSlice = createSlice({
  name: "hoverButtonBorder",
  initialState: {
    hasBorder: true,
    borderType: undefined,
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
    setSyncBorder: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setHasBorder,
  setBorderType,
  setBorderColor,
  setBorderWidth,
  setBorderRadius,
  setSyncBorder,
} = hoverButtonBorderSlice.actions;

export const syncBorder = () => (dispatch, setState) => {
  const border = setState().present.buttonBorder;
  dispatch(setSyncBorder(border));
};

export default hoverButtonBorderSlice.reducer;
