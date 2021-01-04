import { createSlice } from "@reduxjs/toolkit";

const hoverButtonShadowSlice = createSlice({
  name: "hoverButtonShadow",
  initialState: {
    hasShadow: true,
    shadowType: "Outset",
    shadowColor: "#ffffff",
    horizontalPlacement: 0,
    verticalPlacement: 0,
    blur: 0,
    spread: 0,
  },
  reducers: {
    setHasShadow: (state, action) => {
      state.hasShadow = !state.hasShadow;
    },
    setShadowColor: (state, action) => {
      state.shadowColor = action.payload;
    },
    setShadowType: (state, action) => {
      state.shadowType = action.payload;
    },
    setHorizontalPlacement: (state, action) => {
      state.horizontalPlacement = action.payload;
    },
    setVerticalPlacement: (state, action) => {
      state.verticalPlacement = action.payload;
    },
    setBlur: (state, action) => {
      state.blur = action.payload;
    },
    setSpread: (state, action) => {
      state.spread = action.payload;
    },
    setSyncShadow: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setHasShadow,
  setShadowType,
  setShadowColor,
  setHorizontalPlacement,
  setVerticalPlacement,
  setBlur,
  setSpread,
  setSyncShadow,
} = hoverButtonShadowSlice.actions;

export const syncShadow = () => (dispatch, setState) => {
  const shadow = setState().buttonShadow.present;
  dispatch(setSyncShadow(shadow));
};

export default hoverButtonShadowSlice.reducer;
