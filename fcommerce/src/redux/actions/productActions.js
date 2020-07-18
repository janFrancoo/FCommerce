import * as actionTypes from "./actionTypes";

export const getProducts = (categoryId) => (function (dispatch) {
    const url = "http://localhost:5000/api/product/products?categoryId=" + categoryId;
    return fetch(url).then(res => res.json())
    .then(res => dispatch(getProductsSuccess(res)))
});

export const getProduct = (productId) => (function (dispatch) {
    const url = "http://localhost:5000/api/product/" + productId;
    return fetch(url).then(res => res.json())
    .then(res => dispatch(getProductsSuccess(res)))
});

export const getProductsSuccess = (products) => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
});
