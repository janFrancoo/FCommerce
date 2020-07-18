import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import productReducer from "./productReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    categoryListReducer,
    productListReducer,
    changeCategoryReducer,
    productReducer,
    authReducer
});

export default rootReducer;
