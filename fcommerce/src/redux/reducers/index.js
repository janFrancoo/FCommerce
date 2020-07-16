import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
    categoryListReducer,
    productListReducer,
    changeCategoryReducer
});

export default rootReducer;
