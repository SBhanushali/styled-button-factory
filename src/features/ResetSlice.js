import { createSlice } from "@reduxjs/toolkit";

export const resetSlice = createSlice({
  name: "reset",
  initialState: {},
  reducers: {
    resetStore: (state) => {},
  },
});

export const { resetStore } = resetSlice.actions;

export default resetSlice.reducer;
