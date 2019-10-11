import { put, takeLatest } from 'redux-saga/effects';
import LoginApiService from '../../apiServices/LoginApiService';
import { LOG_IN, LOG_OUT, LOG_ME_IN } from './actionTypes'
import { loggedOut, setUser} from './actionCreators';

function* logIn(action) {
    try {
        const token = yield LoginApiService.login(action.payload)
            .then(response => {
                return response.data.access_token;
               });
        localStorage.setItem('access_token', token);
        yield getUser();
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

function* getUser() {
    const user = yield LoginApiService.getUser().then(({ data }) => data);
    yield put(setUser(user));
}

export function* getUserActionWatcher() {
    yield takeLatest(LOG_ME_IN, getUser);
}
