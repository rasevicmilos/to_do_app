import { LOGGED_OUT, LOGGED_ME_IN} from './actionTypes';
const initialState = null;

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED_OUT:
            return initialState;
        case LOGGED_ME_IN:
            console.log(action.payload);
            const user = {
                name: action.payload.name
            }
            return user;
        default:
            return state;
    }
};

export default userReducer;
