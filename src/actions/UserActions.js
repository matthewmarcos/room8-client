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


export const register = (username, password, nickname, email) => {
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
        dispatch({
            type: 'LOGOUT_SUCCESS',
            payload: {}
        });
    };
};


export const updateUserProfile = (tempUser) => {
    const request = axios.put('/api/profile', tempUser);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getProfile());
        });

        request.catch((error) => {
            console.error(error);
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


export const updatePreferencesWhen = (formData) => {
    const request = axios.put('/api/preferences/when', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesCost = (formData) => {
    const request = axios.put('/api/preferences/cost', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesLocation = (formData) => {
    const request = axios.put('/api/preferences/location', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesUtilities = (formData) => {
    const request = axios.put('/api/preferences/utilities', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesSex = (formData) => {
    const request = axios.put('/api/preferences/sex', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesLifestyle = (formData) => {
    const request = axios.put('/api/preferences/lifestyle', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};


export const updatePreferencesMisc = (formData) => {
    const request = axios.put('/api/preferences/misc', formData);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch(appActions.getPreferences());
        });

        request.catch((error) => {
            console.error(error);
        });
    };
};

export const acceptMatch = (targetId) => {
    const request = axios.post('/api/matches', { targetId });

    return (dispatch) => {

        // Optimistic UI first here?
        dispatch({
            type: 'REMOVE_MATCH_FROM_STATE',
            payload: { targetId }
        });

        request.then((response) => {
            const { data } = response;

            console.log('data', data);
            console.log('response', response);
        });

        request.catch((error) => {
        });
    };
};

export const declineMatch = (targetId) => {
    console.log('targetId: ', targetId);
    const request = axios.put('/api/matches', { targetId });

    return (dispatch) => {

        // Optimistic UI first here?
        dispatch({
            type: 'REMOVE_MATCH_FROM_STATE',
            payload: { targetId }
        });

        request.then((response) => {
            const { data } = response;

        });

        request.catch((error) => {
        });
    };
};

export const toggleDiscovery = () => {
    const discoverySetting = 'something'
    const request = axios.put('/api/discover/match', { discoverySetting });

    return (dispatch) => {
        request.then((response) => {
            const { data } = response;
            dispatch({
                type: 'TOGGLE_DISCOVERY',
                payload: { data }
            });
        });

        request.catch((error) => {
        });
    };
};
