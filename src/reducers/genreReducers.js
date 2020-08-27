import { FETCH_GENRE, CLEAR_STATE } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GENRE:
      return [...state, ...action.payload.data.data];
    case CLEAR_STATE:
      return [];
    default:
      return state;
  }
}
