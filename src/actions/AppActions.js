import axios from 'axios';

/*
    Dispatched by some components to check server if the user is still logged in.
*/
export const whoami = (propName, propValue) => {
    const request = axios.get('/auth/profile');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'WHO_AM_I_SUCCESS',
                payload: {
                    ...data
                }
            });
        });
    };
};
