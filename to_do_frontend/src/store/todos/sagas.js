import { put, takeLatest } from 'redux-saga/effects';
import TodosApiService from '../../apiServices/TodosApiService';
import { fetchTodos, setTodos, addTodo, removeTodo, setEdited, setFinished} from './actionCreators';
import { FETCH_TODOS, CREATE_TODO, DELETE_TODO, EDIT_TODO , FINISH_TODO} from './actionTypes';


function* getAllTodos() {
    const todos = yield TodosApiService.getAll().then(({ data }) => data);
    yield put(setTodos(todos));
}

export function* fetchTodosActionWatcher() {
    yield takeLatest(FETCH_TODOS, getAllTodos);
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

function* editTodo(action) {
    const todo = yield TodosApiService.updateTodo(action.payload).then(({ data }) => data);
    yield put(setEdited(todo));
    yield action.caller.componentDidMount();
}

export function* editTodoActionWatcher() {
    yield takeLatest(EDIT_TODO, editTodo);
}

function* finishTodo(action) {
    try {
        const todo = yield TodosApiService.updateTodo(action.payload).then(({ data }) => data);
        yield put(setFinished(todo));
        yield put(fetchTodos());
    } catch (error) {
        console.log(error);
    }
}

export function* finishTodoActionWatcher() {
    yield takeLatest(FINISH_TODO, finishTodo);
}
