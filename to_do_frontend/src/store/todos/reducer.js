import {SET_TODOS} from './actionTypes';
import {LOGGED_OUT} from '../user/actionTypes';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODOS:
            return action.payload;
        case LOGGED_OUT:
            return initialState;
        default:
            return state;
    }
}

export default todosReducer;
