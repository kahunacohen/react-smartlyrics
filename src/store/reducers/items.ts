import { CHORD_PRO_CHANGED, CHORD_PRO_CHANGED_TXT } from "../actions";

export function itemsHasErrored(state = false, action: any) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}
export function itemsIsLoading(state = false, action: any) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function items(state = [], action: any) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return action.items;
    default:
      return state;
  }
}

export function chordProChangedTxt(state = null, action: any) {
  switch (action.type) {
    case CHORD_PRO_CHANGED_TXT:
      return action.chordProChangedTxt;
    default:
      return state;
  }
}
