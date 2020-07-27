import { SystemState, UserActionTypes } from '../actions/types';
import { FETCH_USER } from '../actions/types';

const initialState: SystemState = {
    loggedIn: false,
    role: '',
};

export default function authReducer(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case FETCH_USER:
            return {
                loggedIn: action.payload && !!action.payload.googleId,
                role: action.payload && action.payload.role,
            };
        default:
            return state;
    }
}
