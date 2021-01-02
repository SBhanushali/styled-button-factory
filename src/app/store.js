import { configureStore } from "@reduxjs/toolkit";
import canvasBackgroundReducer from "../features/canvasBackgroundSlice";
import buttonBackgroundReducer from "../features/ButtonBackgroundSlice";
import buttonBorderReducer from "../features/ButtonBorderSlice";
import buttonShadowReducer from "../features/ButtonShadowSlice";
import buttonDefaultReducer from "../features/ButtonDefaultSlice";
import hoverButtonBackgroundReducer from "../features/HoverButtonBackgroundSlice";
import hoverButtonBorderReducer from "../features/HoverButtonBorderSlice";
import hoverButtonShadowReducer from "../features/HoverButtonShadowSlice";
import hoverButtonDefaultReducer from "../features/HoverButtonDefaultSlice";

export default configureStore({
  reducer: {
    canvas: canvasBackgroundReducer,
    buttonDefault: buttonDefaultReducer,
    buttonBackground: buttonBackgroundReducer,
    buttonBorder: buttonBorderReducer,
    buttonShadow: buttonShadowReducer,
    hoverButtonDefault: hoverButtonDefaultReducer,
    hoverButtonBackground: hoverButtonBackgroundReducer,
    hoverButtonBorder: hoverButtonBorderReducer,
    hoverButtonShadow: hoverButtonShadowReducer,
  },
});
