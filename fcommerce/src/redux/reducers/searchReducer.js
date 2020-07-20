import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(state=initialState.searchResult, action) {        
    switch (action.type) {
        case actionTypes.SEARCH_PRODUCT_SUCCESS:
            return action.payload;
        case actionTypes.SEARCH_PRODUCT_FAIL:
            return action.payload;
        default:
            return state;
    }
}
