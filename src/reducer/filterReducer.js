import * as actionTypes from '../constanst/actionTypes';

const initialState = {
    filter: '',
    isLoading: false
}
export default function filterReducer (state = initialState, action) {
    switch(action.type) {
        case actionTypes.FILTER_PRODUCT:
            return state;
        default:
            return state;
    }
}