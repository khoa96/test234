import {combineReducers} from 'redux';
import productReducer from './productReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    productReducer,
    filterReducer
})
export default rootReducer;