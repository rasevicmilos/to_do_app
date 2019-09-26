import {LOGGED_IN, LOGGED_OUT} from './actionTypes';
const initialState = null;

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED_IN:
            return action.payload
        case LOGGED_OUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
