import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state=initialState.cartItems, action) {        
    switch (action.type) {
        case actionTypes.GET_CART_SUCCESS:
            return action.payload;
        case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
            return action.payload;
        case actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
