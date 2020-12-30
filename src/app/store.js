import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import canvasBackgroundReducer from "../features/canvasBackground/canvasBackgroundSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    canvas: canvasBackgroundReducer,
  },
});
