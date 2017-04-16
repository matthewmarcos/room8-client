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
            dispatch(appActions.getEverything());
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


export const updateUserProfile = (tempUser) => {
    const request = axios.put('/api/profile', tempUser);

    return (dispatch) => {
        request.then(({data}) => {
            // Refetch the profile
            dispatch(appActions.getProfile());

        });

        request.catch(({data}) => {

        });
    };
};


const updateUserOrganizations = (tempOrganizations) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
        }
    };
};


const updateUserInterests = (tempInterests) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
        }
    };
};


const updateUserHobbies = (tempHobbies) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
        }
    };
};


export const updateArray = (type) => {
    switch(type) {
        case 'organizations' : return updateUserOrganizations;
        case 'interests' : return updateUserInterests;
        case 'hobbies' : return updateUserHobbies;
        default : return (x)=> { return alert('thunkerzz'); }
    }
};

