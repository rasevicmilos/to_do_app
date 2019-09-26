import { put, takeLatest } from 'redux-saga/effects';
import TodosApiService from '../../apiServices/TodosApiService';
import { setTodos } from './actionCreators';
import { FETCH_TODOS } from './actionTypes';

function* fetchTodos() {
    const todos = yield TodosApiService.getAll().then(({ data }) => data);
    yield put(setTodos(todos));
}

export function* fetchTodosActionWatcher() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}
