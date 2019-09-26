import { combineReducers } from 'redux';
import userReducer from '../store/user/reducer';
import todosReducer from '../store/todos/reducer';

export default combineReducers({
    user: userReducer,
    todos: todosReducer,
});
