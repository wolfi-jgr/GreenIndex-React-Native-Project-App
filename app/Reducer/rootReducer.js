import {combineReducers} from 'redux';
import favReducer from './FavReducer';

const rootReducer = combineReducers({fav: favReducer});

export default rootReducer;