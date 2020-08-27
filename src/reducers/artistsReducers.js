import { FETCH_ARTSITS, CLEAR_STATE } from "../actions";
export { music } from "../utils/state";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ARTSITS:
      return action.payload.data.data;
    case CLEAR_STATE:
      return [];
    default:
      return state;
  }
}
