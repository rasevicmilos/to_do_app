import { put, takeLatest } from 'redux-saga/effects';
import TodosApiService from '../../apiServices/TodosApiService';
import { setTodos, addTodo, removeTodo } from './actionCreators';
import { FETCH_TODOS, CREATE_TODO, DELETE_TODO } from './actionTypes';

function* fetchTodos() {
    const todos = yield TodosApiService.getAll().then(({ data }) => data);
    yield put(setTodos(todos));
}

export function* fetchTodosActionWatcher() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}

function* createTodo(action) {
    try{
        const todo = yield TodosApiService.createTodo(action.payload).then(({ data }) => data);
        yield put(addTodo(todo));
    }
    catch (error) {
        alert('Please fill out all the fields');
    }
}

export function* createTodoActionWatcher() {
    yield takeLatest(CREATE_TODO, createTodo);
}

function* deleteTodo(action) {
    const todo = yield TodosApiService.deleteTodo(action.payload).then(({ data }) => data);
    yield put(removeTodo(todo));
}

export function* deleteTodoActionWatcher() {
    yield takeLatest(DELETE_TODO, deleteTodo);
}