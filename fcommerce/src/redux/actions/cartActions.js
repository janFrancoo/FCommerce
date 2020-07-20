import * as actionTypes from "./actionTypes";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export const getCart = () => (function(dispatch) {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");

    return fetch("http://localhost:5000/api/user/cart", {
        headers: {
            'Authorization': 'Bearer: ' + accessToken
        },
    })
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            return dispatch(getCartSuccess(res.cart.products))
        } else {
            alertify.error(res.message);
            return dispatch(getCartFail(res.message))
        }
    })
});

export const getCartSuccess = (cart) => ({
    type: actionTypes.GET_CART_SUCCESS,
    payload: cart
});

export const getCartFail = (message) => ({
    type: actionTypes.GET_CART_FAIL,
    payload: message
});
