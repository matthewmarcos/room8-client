import axios from 'axios';

export const fakeLogin = (username, password) => {
    return {
        type: 'FAKE_LOGIN',
        payload: {
            username,
            password
        }
    };
}


export const login = (username, password) => {
    return {
        type: 'LOGIN',
        payload: axios.post('/auth/login', {
            username, password
        })
    };
}


export const register = (username, password, email, nickname) => {
    const request = axios.post('/auth/register', {
        username,
        password,
        email,
        nickname
    });

    return {
        type: 'REGISTER',
        payload: request
    };
}


export const logout = (propName, propValue) => {
    const request = axios.post('/auth/logout', {});

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'LOGOUT_SUCCESS',
                payload: {
                    ...data
                }
            });
        });
    };
};


export const changeUserProperty = (propName, propValue) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
            propName,
            propValue
        }
    };
};
