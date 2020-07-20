import * as actionTypes from "./actionTypes";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export const getProducts = (categoryId) => (function (dispatch) {
    const url = "http://localhost:5000/api/product/products?categoryId=" + categoryId;
    return fetch(url).then(res => res.json())
    .then(res => dispatch(getProductsSuccess(res.products)))
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

export const addProductToCart = (productId, amount) => (function (dispatch) {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");

    return fetch('http://localhost:5000/api/user/add-to-cart', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({id: productId, amount})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(addProductToCartSuccess(res.cart.products));
        } else {
            alertify.error(res.message);
            return dispatch(addProductToCartFail(res.message));
        }
    });
});

export const addProductToCartSuccess = (cart) => ({
    type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: cart
});

export const addProductToCartFail = (message) => ({
    type: actionTypes.ADD_PRODUCT_TO_CART_FAIL,
    payload: message
});

export const removeProductFromCart = (productId) => (function (dispatch) {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");

    return fetch('http://localhost:5000/api/user/remove-from-cart', {
        method: 'delete',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({id: productId})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(removeProductFromCartSuccess(res.cart.products));
        } else {
            alertify.error(res.message);
            return dispatch(removeProductFromCartFail(res.message));
        }
    });
});

export const removeProductFromCartSuccess = (cart) => ({
    type: actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
    payload: cart
});

export const removeProductFromCartFail = (message) => ({
    type: actionTypes.REMOVE_PRODUCT_FROM_CART_FAIL,
    payload: message
});

export const searchProduct = (key) => (function (dispatch) {
    return fetch("http://localhost:5000/api/product/search-product?productName=" + key)
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(searchProductSuccess(res.products));
        } else {
            alertify.error(res.message);
            return dispatch(searchProductFail());
        }
    })
});

export const searchProductSuccess = (products) => ({
    type: actionTypes.SEARCH_PRODUCT_SUCCESS,
    payload: products
});

export const searchProductFail = () => ({
    type: actionTypes.SEARCH_PRODUCT_FAIL,
    payload: []
});
