import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
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
    canvas: undoable(canvasBackgroundReducer),
    buttonDefault: undoable(buttonDefaultReducer),
    buttonBackground: undoable(buttonBackgroundReducer),
    buttonBorder: undoable(buttonBorderReducer),
    buttonShadow: undoable(buttonShadowReducer),
    hoverButtonDefault: undoable(hoverButtonDefaultReducer),
    hoverButtonBackground: undoable(hoverButtonBackgroundReducer),
    hoverButtonBorder: undoable(hoverButtonBorderReducer),
    hoverButtonShadow: undoable(hoverButtonShadowReducer),
  },
});
