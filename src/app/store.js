import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import canvasBackgroundReducer from "../features/canvasBackgroundSlice";
import buttonBackgroundReducer from "../features/ButtonBackgroundSlice";
import buttonBorderReducer from "../features/ButtonBorderSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    canvas: canvasBackgroundReducer,
    buttonBackground: buttonBackgroundReducer,
    buttonBorder: buttonBorderReducer,
  },
});
