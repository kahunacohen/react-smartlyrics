import { combineReducers } from "redux";
import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChanged
} from "./items";
export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  chordProChanged
});
