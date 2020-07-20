import * as actionTypes from "./actionTypes";

export const getCategories = () => (function(dispatch) {
    const url = "http://localhost:5000/api/category/categories";
    return fetch(url).then(res => res.json())
    .then(res => dispatch(getCategoriesSuccess(res.categories)))
});

export const getCategoriesSuccess = (categories) => ({
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
});

export const changeCategory = (category) => ({
    type: actionTypes.CHANGE_CATEGORY,
    payload: category
});
