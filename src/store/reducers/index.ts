import { combineReducers } from "redux";
import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChanged,
  chordProChangedTxt
} from "./items";
export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChanged,
  chordProChangedTxt
});
