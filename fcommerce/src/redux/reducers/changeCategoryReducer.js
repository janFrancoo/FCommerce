import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.currentCategory, action) {    
    console.log("changeCategoryReducer -> ", action);    
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}
