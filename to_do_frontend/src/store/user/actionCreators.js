import { LOG_IN, LOG_OUT, LOGGED_IN, LOGGED_OUT, LOG_ME_IN, LOGGED_ME_IN, SET_TOKEN } from './actionTypes';

export const logIn = (user) => ({
    type: LOG_IN,
    payload: user
});

export const logOut = () => ({
    type: LOG_OUT
});

export const loggedIn = () => ({
    type: LOGGED_IN
});

export const loggedOut = () => ({
    type: LOGGED_OUT
});

export const getUser = () => ({
    type: LOG_ME_IN
});

export const setUser = (user) => ({
    type: LOGGED_ME_IN,
    payload: user
})

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token
})