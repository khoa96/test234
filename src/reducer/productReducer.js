import * as actionTypes from '../constanst/actionTypes';
import products from '../products';
import { stat } from 'fs';

const initialState = {
     products: products,
     isLoading: false
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state;
    }
}