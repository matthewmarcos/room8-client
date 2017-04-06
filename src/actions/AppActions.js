import axios from 'axios';

/*
    Dispatched by some components to check server if the user is still logged in.
*/
export const whoami = (propName, propValue) => {
    return {
        type: 'WHO_AM_I',
        payload: axios.get('/auth/profile')
    };
};
