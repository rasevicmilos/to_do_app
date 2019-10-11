import {FETCH_TODOS, SET_TODOS, CREATE_TODO, ADD_TODO, DELETE_TODO, REMOVE_TODO, EDIT_TODO, SET_EDITED, FINISH_TODO} from './actionTypes';

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

export const editTodo = (todo, caller) => ({
    type: EDIT_TODO,
    payload: todo,
    caller: caller
})

export const setEdited = (todo) => ({
    type: SET_EDITED,
    payload: todo
})

export const finishTodo = (todo) => ({
    type: FINISH_TODO,
    payload: todo,
})

export const setFinished = (todo) => ({
    type: SET_EDITED,
    payload: todo
})
