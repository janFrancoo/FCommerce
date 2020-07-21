import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function commentReducer(state=initialState.comments, action) {        
    switch (action.type) {
        case actionTypes.GET_COMMENTS_SUCCESS:
            return action.payload;
        case actionTypes.GET_COMMENTS_FAIL:
            return action.payload;
        case actionTypes.ADD_COMMENT_SUCCESS:
            return [{...action.payload}, ...state];
        default:
            return state;
    }
}
