import {FETCH_TODOS, SET_TODOS} from './actionTypes';

export const fetchTodos = () => ({
    type: FETCH_TODOS
});

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
})