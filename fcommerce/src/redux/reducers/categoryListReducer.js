import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function categoryListReducer(state=initialState.categories, action) {        
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        case actionTypes.ADD_CATEGORY_SUCCESS:
            return [...state, {...action.payload}];
        case actionTypes.REMOVE_CATEGORY_SUCCESS:
            return state.filter(category => category.name !== action.payload)
        default:
            return state;
    }
}
