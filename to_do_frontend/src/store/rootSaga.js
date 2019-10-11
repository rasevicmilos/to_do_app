import { all } from 'redux-saga/effects';
import * as userSagas from './user/sagas';
import * as todosSagas from './todos/sagas';

export default function* rootSaga() {
    yield all([
        userSagas.logInActionWatcher(),
        userSagas.logOutActionWatcher(),
        todosSagas.fetchTodosActionWatcher(),
        todosSagas.createTodoActionWatcher(),
        todosSagas.deleteTodoActionWatcher(),
        todosSagas.editTodoActionWatcher(),
        todosSagas.finishTodoActionWatcher(),
        userSagas.getUserActionWatcher()
    ]);
}