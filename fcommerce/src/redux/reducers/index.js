import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import productReducer from "./productReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import adminCheckReducer from "./adminCheckReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    categoryListReducer,
    productListReducer,
    changeCategoryReducer,
    productReducer,
    authReducer,
    cartReducer,
    adminCheckReducer,
    searchReducer
});

export default rootReducer;
