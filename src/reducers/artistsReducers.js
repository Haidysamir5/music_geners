import { FETCH_ARTSITS } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ARTSITS:
      return action.payload.data.data; //replace state not add to it
    default:
      return state;
  }
}
