export function itemsHasErrored(bool: boolean) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}
export function itemsIsLoading(bool: boolean) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}
export function itemsFetchDataSuccess(items: boolean) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData(url: string) {
  return (dispatch: Function) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export const CHORD_PRO_CHANGED = "CHORD_PRO_CHANGED";
export function chordProChanged(changed: boolean) {
  return (dispatch: Function) => {
    dispatch({
      type: CHORD_PRO_CHANGED,
      chordProChanged: changed
    });
  };
}
