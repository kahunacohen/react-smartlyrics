import { combineReducers } from "redux";
import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChangedTxt
} from "./items";
export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChangedTxt
});
