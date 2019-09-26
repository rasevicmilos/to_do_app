import {FETCH_TODOS, SET_TODOS, CREATE_TODO, ADD_TODO, DELETE_TODO, REMOVE_TODO} from './actionTypes';

export const fetchTodos = () => ({
    type: FETCH_TODOS
});

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
})

export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload: todo
})

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    payload: todo
})