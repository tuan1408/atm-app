import { combineReducers } from "redux";
import atmReducer from "./atmReducer";
import popupReducer from "./popupBoxReducer";

const rootReducer = combineReducers({
  atm: atmReducer,
  popupBox: popupReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
