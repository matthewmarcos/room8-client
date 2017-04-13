import axios from 'axios';
import * as appActions from './AppActions';

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
    const request = axios.post('/auth/login', { username, password });

    return (dispatch) => {

        dispatch({
            type: 'LOGIN_START',
            payload: {}
        });

        request.then(({data}) => {
            dispatch(appActions.getProfile());
            dispatch(appActions.getPreferences());
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    ...data
                }
            });
        });

        request.catch((error) => {
            dispatch({
                type: 'LOGIN_FAILED',
                payload: {
                    ...error
                }
            });
        });

    };
};


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


export const logout = () => {
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
