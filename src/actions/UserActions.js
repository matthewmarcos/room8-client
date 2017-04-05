import axios from 'axios';

export const login = (username, password) => {
    return {
        type: 'FAKE_LOGIN',
        payload: {
            username,
            password
        }
    };
}


export const register = (username, password, email, nickname) => {
    return {
        type: 'REGISTER',
        payload: axios.post('/auth/register', {
            username, password, email, nickname
        })
    };
}


export const changeUserProperty = (propName, propValue) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
            propName,
            propValue
        }
    };
};
