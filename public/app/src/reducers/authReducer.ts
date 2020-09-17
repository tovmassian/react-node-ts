import { SystemState, UserActionTypes } from '../actions/types';
import { FETCH_USER } from '../actions/types';

const initialState: SystemState = {
    loggedIn: true,
    role: 'admin',
};

export default function authReducer(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case FETCH_USER:
            return {
                loggedIn: true,
                role: 'admin',
            };
        default:
            return state;
    }
}
