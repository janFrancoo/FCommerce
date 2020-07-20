import * as actionTypes from "./actionTypes";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export const checkAdminAccess = () => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/auth/admin', {
        headers: {
            'Authorization': 'Bearer: ' + accessToken
        }})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(checkAdminAccessSuccess());
        } else {
            alertify.error(res.message);
            return dispatch(checkAdminAccessFail());
        }
    });
});

export const checkAdminAccessSuccess = () => ({
    type: actionTypes.CHECK_ADMIN_ACCESS_SUCCESS,
    payload: true
});

export const checkAdminAccessFail = () => ({
    type: actionTypes.CHECK_ADMIN_ACCESS_FAIL,
    payload: false
});

export const addProduct = (productName, categoryName, stock, price, images, description) => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/product/add-product', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({productName, categoryName, stock, price, images, description})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(addProductSuccess(res.product));
        } else {
            alertify.error(res.message);
            return dispatch(addProductFail());
        }
    });
});

export const addProductSuccess = (product) => ({
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    payload: product
});

export const addProductFail = () => ({
    type: actionTypes.ADD_PRODUCT_FAIL,
    payload: {}
});

export const removeProduct = (productId) => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/product/add-product', {
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
            return dispatch(removeProductSuccess());
        } else {
            alertify.error(res.message);
            return dispatch(removeProductFail());
        }
    });
});

export const removeProductSuccess = () => ({
    type: actionTypes.REMOVE_PRODUCT_SUCCESS,
    payload: true
});

export const removeProductFail = () => ({
    type: actionTypes.REMOVE_PRODUCT_FAIL,
    payload: false
});

export const updateProduct = (productId, productName, categoryName, stock, price, images, description) => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/product/update-product', {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({id: productId, productName, categoryName, stock, price, images, description})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(updateProductSuccess(res.product));
        } else {
            alertify.error(res.message);
            return dispatch(updateProductFail());
        }
    });
});

export const updateProductSuccess = (product) => ({
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product
});

export const updateProductFail = () => ({
    type: actionTypes.UPDATE_PRODUCT_FAIL,
    payload: {}
});

export const addCategory = (categoryName) => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/category/add-category', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({categoryName})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(addCategorySuccess(res.category));
        } else {
            alertify.error(res.message);
            return dispatch(addCategoryFail());
        }
    });
});

export const addCategorySuccess = (category) => ({
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    payload: category
});

export const addCategoryFail = () => ({
    type: actionTypes.ADD_CATEGORY_FAIL,
    payload: {}
});

export const removeCategory = (categoryName) => (function (dispatch) {
    const accessToken = new Cookies().get("accessToken");

    return fetch('http://localhost:5000/api/category/remove-category', {
        method: 'delete',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + accessToken
        },
        body: JSON.stringify({categoryName})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(removeCategorySuccess(categoryName));
        } else {
            alertify.error(res.message);
            return dispatch(removeCategoryFail());
        }
    });
});

export const removeCategorySuccess = (categoryName) => ({
    type: actionTypes.REMOVE_CATEGORY_SUCCESS,
    payload: categoryName
});

export const removeCategoryFail = () => ({
    type: actionTypes.REMOVE_CATEGORY_FAIL,
    payload: ""
});
