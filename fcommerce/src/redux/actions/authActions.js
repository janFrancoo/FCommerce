import * as actionTypes from "./actionTypes";
import Cookies from "universal-cookie";
import alertify from "alertifyjs";

export const checkIfLogin = () => (function(dispatch) {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
        
    if (!accessToken) {
        return dispatch(checkIfLoginFail());
    }

    const email = cookies.get("email");
    const username = cookies.get("username");

    return dispatch(checkIfLoginSuccess({
        data: {
            email, username
        }
    }));
});

export const checkIfLoginSuccess = (user) => ({
    type: actionTypes.CHECK_IF_LOGIN_SUCCESS,
    payload: user
});

export const checkIfLoginFail = () => ({
    type: actionTypes.CHECK_IF_LOGIN_FAIL,
    payload: { }
});

export const login = (email, password) => (function(dispatch) {
    return fetch('http://localhost:5000/api/auth/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false)
            return dispatch(loginSuccess(res));
        else {
            alertify.error(res.message);
            return dispatch(loginFail());
        }
    });
});

export const loginSuccess = (user) => {
    const cookies = new Cookies();
    cookies.set("accessToken", user.access_token, { path: "/", expires: new Date(Date.now()+ 1800000) });
    cookies.set("email", user.data.email, { path: "/", expires: new Date(Date.now()+ 1800000) });
    cookies.set("username", user.data.username, { path: "/", expires: new Date(Date.now()+ 1800000) });

    return ({
        type: actionTypes.LOGIN_SUCCESS,
        payload: user
    });
};

export const loginFail = () => ({
    type: actionTypes.LOGIN_FAIL,
    payload: { }
});

export const register = (email, username, password) => (function(dispatch) {
    return fetch('http://localhost:5000/api/auth/register', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, username, password})})
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            alertify.success(res.message);
            return dispatch(registerSuccess());
        } else {
            alertify.error(res.message);
            return dispatch(registerFail());
        }
    });
});

export const registerSuccess = () => {
    return ({
        type: actionTypes.REGISTER_SUCCESS,
        payload: { }
    });
};

export const registerFail = () => ({
    type: actionTypes.REGISTER_FAIL,
    payload: { }
});

export const verifyMail = (verificationToken) => function(dispatch) {
    console.log(verificationToken);
    
    return fetch("http://localhost:5000/api/auth/confirm?verificationToken=" + verificationToken)
    .then(res => res.json())
    .then(res => {
        if (res.success !== false) {
            const cookies = new Cookies();
            cookies.set("accessToken", res.access_token, { path: "/", expires: new Date(Date.now()+ 1800000) });
            cookies.set("email", res.data.email, { path: "/", expires: new Date(Date.now()+ 1800000) });
            cookies.set("username", res.data.username, { path: "/", expires: new Date(Date.now()+ 1800000) });

            alertify.success(res.data.email + " is verified successully");
        } else
            alertify.error(res.message);

        return dispatch({
            type: actionTypes.VERIFY_MAIL,
            payload: { }
        });
    });
};
