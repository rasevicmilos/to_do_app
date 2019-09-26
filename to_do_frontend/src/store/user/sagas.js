import { put, takeLatest } from 'redux-saga/effects';
import LoginApiService from '../../apiServices/LoginApiService';
import { LOG_IN, LOG_OUT, LOGGED_OUT, LOGGED_IN} from './actionTypes'
import { loggedIn, loggedOut } from './actionCreators';

function* logIn(action) {
    try {
        const user = yield LoginApiService.login(action.payload)
                  .then(response => {
                     let newUser = action.payload;
                     return newUser;
                  });
        yield put(loggedIn(user));
    }
    catch(error) {
        alert('Wrong username/password');
    }
}

function* logOut() {
    yield LoginApiService.logout();
    yield put(loggedOut());
}

export function* logInActionWatcher() {
    yield takeLatest(LOG_IN, logIn);
}

export function* logOutActionWatcher() {
    yield takeLatest(LOG_OUT, logOut);
}
