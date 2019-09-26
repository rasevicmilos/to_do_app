import {SET_TODOS, ADD_TODO, REMOVE_TODO} from './actionTypes';
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
        case REMOVE_TODO:
            const newState = state.filter(todo => todo.id !== action.payload.id);
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default todosReducer;
