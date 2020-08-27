import { FETCH_GENRE } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GENRE:
      return [...state, ...action.payload.data.data]; //appen data to the prev state
    default:
      return state;
  }
}
