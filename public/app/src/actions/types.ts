export interface UserData {
    _id: string;
    googleId: string;
}

export const FETCH_USER = 'fetch_user';

interface FetchUserAction {
    type: typeof FETCH_USER;
    payload: UserData;
}

export interface SystemState {
    loggedIn: boolean;
}

export type UserActionTypes = FetchUserAction;
