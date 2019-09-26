import {SET_TODOS, ADD_TODO} from './actionTypes';
import {LOGGED_OUT} from '../user/actionTypes';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODOS:
            return action.payload;
        case LOGGED_OUT:
            return initialState;
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default todosReducer;
