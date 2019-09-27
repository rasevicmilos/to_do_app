import {SET_TODOS, ADD_TODO, REMOVE_TODO, SET_EDITED} from './actionTypes';
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
            return newState;
        case SET_EDITED:
            var editedState = state;
            var oldTodo = editedState.find(todo => todo.id === action.payload.id);
            var index = editedState.indexOf(oldTodo);
            editedState[index] = action.payload;
            return editedState;
        default:
            return state;
    }
}

export default todosReducer;
