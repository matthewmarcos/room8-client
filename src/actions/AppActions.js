import axios from 'axios';

/*
    Dispatched by some components to check server if the user is still logged in.
*/
export const whoami = (propName, propValue) => {
    const request = axios.get('/auth/profile');

    return (dispatch) => {
        request.then(({data}) => {
            return {
                type: 'CHECK_LOGIN_FULFILLED',
                payload: data
            }
        });
    };
};
