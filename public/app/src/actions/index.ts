import { FETCH_USER } from './types';

// bound action creator automatically creates and dispatches a function
const fetchUser = () => async (dispatch: any) => {
    dispatch({
        type: FETCH_USER,
        payload: await fetch('/api/user').then((res) => res.ok && res.json()),
    });
};

export { fetchUser };
