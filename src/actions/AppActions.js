import axios from 'axios';

/*
    Dispatched by some components to check server if the user is still logged in.
*/
export const whoami = (propName, propValue) => {
    const request = axios.get('/auth/profile');

    return (dispatch) => {
        dispatch({
            type: 'WHO_AM_I_START',
            payload: {}
        });

        request.then(({data}) => {
            const { isLoggedIn } = data;

            dispatch({
                type: 'WHO_AM_I_SUCCESS_TRUE',
                payload: {
                    ...data,
                    isLoggedIn: data.isLoggedIn
                }
            });
        });

        request.catch((error) => {
            dispatch({
                type: 'WHO_AM_I_FAILED',
                payload: {}
            });
            console.log('error: ', error);
        });
    };
};
