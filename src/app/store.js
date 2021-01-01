import { configureStore } from "@reduxjs/toolkit";
import canvasBackgroundReducer from "../features/canvasBackgroundSlice";
import buttonBackgroundReducer from "../features/ButtonBackgroundSlice";
import buttonBorderReducer from "../features/ButtonBorderSlice";
import buttonShadowReducer from "../features/ButtonShadowSlice";
import buttonDefaultReducer from "../features/ButtonDefaultSlice";

export default configureStore({
  reducer: {
    canvas: canvasBackgroundReducer,
    buttonDefault: buttonDefaultReducer,
    buttonBackground: buttonBackgroundReducer,
    buttonBorder: buttonBorderReducer,
    buttonShadow: buttonShadowReducer,
  },
});
