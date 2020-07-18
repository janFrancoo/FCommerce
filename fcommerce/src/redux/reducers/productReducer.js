import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state=initialState.product, action) {        
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
