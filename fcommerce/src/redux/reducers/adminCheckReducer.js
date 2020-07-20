import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function adminCheckReducer(state=initialState.adminPerm, action) {    
    switch (action.type) {
        case actionTypes.CHECK_ADMIN_ACCESS_SUCCESS:
            return action.payload;
        case actionTypes.CHECK_ADMIN_ACCESS_FAIL:
            return action.payload;
        default:
            return state;
    }
}
