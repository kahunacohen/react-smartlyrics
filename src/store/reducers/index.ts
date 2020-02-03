import { combineReducers } from "redux";
import {
  FETCHING_SONGS_ARE_LOADING,
  FETCHING_SONGS_HAS_ERRORED,
  FETCHING_SONGS_HAS_SUCCEEDED
} from "../actions";

export const fetchingSongsHasErrored = (state = false, action: any) => {
  switch (action.type) {
    case FETCHING_SONGS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
};
export const songsAreLoading = (state = false, action: any) => {
  switch (action.type) {
    case FETCHING_SONGS_ARE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
export const fetchingSongsHasSucceeded = (state = [], action: any) => {
  switch (action.type) {
    case FETCHING_SONGS_HAS_SUCCEEDED:
      return action.items;
    default:
      return state;
  }
};

export default combineReducers({
  fetchingSongsHasErrored,
  songsAreLoading,
  fetchingSongsHasSucceeded
});
