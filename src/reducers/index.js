import { combineReducers } from "redux";
// import {reducer as modalReducer} from 'react-redux-modal'

import genreReducers from './genreReducers';
import artistsReducers from './artistsReducers';

export default combineReducers({
    genres:genreReducers,
    artists:artistsReducers,
})

// modalReducer.propTypes = {  text: React.PropTypes.string.isRequired,}
