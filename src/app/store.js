import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import resetReducer from "../features/ResetSlice";

const combineReducer = combineReducers({
  canvas: canvasBackgroundReducer,
  buttonDefault: buttonDefaultReducer,
  buttonBackground: buttonBackgroundReducer,
  buttonBorder: buttonBorderReducer,
  buttonShadow: buttonShadowReducer,
  hoverButtonDefault: hoverButtonDefaultReducer,
  hoverButtonBackground: hoverButtonBackgroundReducer,
  hoverButtonBorder: hoverButtonBorderReducer,
  hoverButtonShadow: hoverButtonShadowReducer,
  reset: resetReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "reset/resetStore") {
    state = undefined;
  }
  return combineReducer(state, action);
};

export default configureStore({
  reducer: undoable(rootReducer),
});
