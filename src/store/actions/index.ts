import fetch from "node-fetch";
import { ChordProSong } from "../../types";

export const FETCHING_SONGS_HAS_ERRORED: string = "FETCHING_SONGS_HAS_ERRORED";
export const fetchingSongsHasErrored = (bool: boolean) => {
  return {
    type: FETCHING_SONGS_HAS_ERRORED,
    hasErrored: bool
  };
};

export const SONGS_ARE_LOADING: string = "SONGS_ARE_LOADING";
export const fetchingSongsIsLoading = (bool: boolean) => {
  return {
    type: SONGS_ARE_LOADING,
    isLoading: bool
  };
};

export const FETCHING_SONGS_HAS_SUCCEEDED: string =
  "FETCHING_SONGS_HAS_SUCCEEDED";
export const fetchingSongsHasSucceeded = (items: Array<any>) => {
  return {
    type: FETCHING_SONGS_HAS_SUCCEEDED,
    items
  };
};

const fetchSongs = (url: string) => {
  return async (dispatch: Function) => {
    dispatch(fetchingSongsIsLoading(true));
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      console.log(resp);
    } catch (_) {
      dispatch(fetchingSongsHasErrored(true));

    }
    dispatch(fetchingSongsIsLoading(false));
    //dispatch(fetchingSongsHasSucceeded(resp.json()))

  };
};
