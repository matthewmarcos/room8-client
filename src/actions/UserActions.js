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


export const updateArray = (type) => {
    const url = {
        organizations: '/api/preferences/organizations',
        interests: '/api/preferences/interests',
        hobbies: '/api/preferences/hobbies'
    }[type];

    return (payload) => {
        const request = axios.put(url, payload);

        return (dispatch) => {
            request.then(({data}) => {
                switch(type) {
                    case 'organizations': {
                        dispatch(appActions.getOrganizations());
                    }
                    break;
                    case 'hobbies': {
                        dispatch(appActions.getHobbies());
                    }
                    break;
                    case 'interests': {
                        dispatch(appActions.getInterests());
                    }
                    break;
                    default : {
                        dispatch(appActions.getEverything());
                    }
                    break;
                }
            });


            request.catch((error) => {
                console.error(error);
            });
        };
    };

};

