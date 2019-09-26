import { LOG_IN, LOG_OUT, LOGGED_IN, LOGGED_OUT } from './actionTypes';

export const logIn = (user) => ({
    type: LOG_IN,
    payload: user
});

export const logOut = () => ({
    type: LOG_OUT
});

export const loggedIn = (user) => ({
    type: LOGGED_IN,
    payload: user
});

export const loggedOut = () => ({
    type: LOGGED_OUT
})