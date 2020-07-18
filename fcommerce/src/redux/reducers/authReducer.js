import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state=initialState.user, action) {            
    switch (action.type) {
        case actionTypes.CHECK_IF_LOGIN_SUCCESS:
            return action.payload;
        case actionTypes.CHECK_IF_LOGIN_FAIL:
            return action.payload;
        case actionTypes.LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
