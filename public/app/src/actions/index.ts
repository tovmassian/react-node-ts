import { FETCH_USER } from './types';

const fetchUser = () => async (dispatch: any) => {
    dispatch({
        type: FETCH_USER,
        payload: await fetch('/api/user').then((res) => res.ok && res.json()),
    });
};

export { fetchUser };
